import React from 'react';
import { capitalize, trim } from 'lodash';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	setEmail: ( email: string ) => void;
	toLogin: () => void;
};

export default function Register( { setEmail, toLogin }: Props ) {
	async function onSubmit( values: FormikValues, { setFieldError }: FormikHelpers<any> ) {
		const data = {
			email: trim( values.email ).toLowerCase(),
			password: trim( values.password ),
			firstName: capitalize( trim( values.firstName ) ),
			lastName: capitalize( trim( values.lastName ) ),
			code: trim( values.code )
		};

		try {
			await rpc.callServer( 'Auth-SignUp', data );
			await rpc.callClient( 'Auth-SuccessRegister', data.email );

			setEmail( data.email );
			toLogin();
		} catch ( err: any ) {
			setFieldError( err.field, err.message );
		}
	}

	return (
		<div className="auth_register">
			<PrimaryTitle className="auth_title">Реєстрацiя</PrimaryTitle>

			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					passwordConfirm: '',
					code: ''
				}}
				validationSchema={Yup.object({
					email: Yup.string().email('Некоректний e-mail').required('Заповнiть поле'),
					password: Yup.string()
						.min(4, 'Мiн. довжина 4 символи')
						.max(32, 'Макс. довжина 32 символи')
						.required('Заповнiть поле'),
					passwordConfirm: Yup.string()
						.required('Паролi не спiвпадають')
						.oneOf([Yup.ref('password'), null], 'Паролi не спiвпадають'),
					firstName: Yup.string()
						.matches(/^[a-z\s]+$/i, 'Тiльки латиниця')
						.max(32, 'Макс. довжина 32 символи')
						.required('Заповнiть поле'),
					lastName: Yup.string()
						.matches(/^[a-z\s]+$/i, 'Тiльки латиниця')
						.max(32, 'Макс. довжина 32 символи')
						.required('Заповнiть поле'),
					code: Yup.string().required('Заповнiть поле')
				})}
				onSubmit={onSubmit}
			>
				{( formik ) => (
					<Form className="auth_form">
						<div className="auth_form-container">
							<div className="auth_form-group">
								<Field title="iм`я" type="text" name="firstName" placeholder="John" />
								<Field title="Прiзвище" type="text" name="lastName" placeholder="Doe" />
							</div>

							<Field
								title="E-mail"
								type="email"
								name="email"
								placeholder=""
							/>

							<GradientButton
								type="button"
								color="green"
								onClick={() => {
									if ( formik.values.email && !formik.errors.email )
										rpc
											.callServer(
												'Auth-GetRegisterCode',
												trim( formik.values.email ).toLowerCase()
											)
											.then( () => showNotification( 'info', 'Перевiрте ваш e-mail' ) )
											.catch( () => formik.setFieldError( 'email', 'E-mail зайнятий' ) );
								}}
							>
								Надiслати код
							</GradientButton>

							<div className="auth_form-group">
								<Field
									title="Пароль"
									type="password"
									name="password"
									placeholder="********"
								/>
								<Field
									title="Пiдтвердження"
									type="password"
									name="passwordConfirm"
									placeholder="********"
								/>
							</div>

							<Field
								className="auth_form-part"
								title="код пiдтвердження"
								type="text"
								name="code"
								placeholder="Перевiрте ваш e-mail"
							/>
						</div>

						<GradientButton type="submit">Створити</GradientButton>
					</Form>
				)}
			</Formik>

			<OutlineButton className="auth_back-btn" onClick={toLogin}>
				Назад
			</OutlineButton>
		</div>
	);
}
