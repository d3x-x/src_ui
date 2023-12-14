import React from 'react';
import { trim } from 'lodash';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	toLogin: () => void;
};

export default function Forgot( { toLogin }: Props ) {
	async function onSubmit( values: FormikValues, { setFieldError }: FormikHelpers<any> ) {
		const data = {
			email: trim( values.email ).toLowerCase(),
			password: trim( values.password ),
			code: trim( values.code )
		};

		try {
			await rpc.callServer( 'Auth-ResetPassword', data );

			toLogin();
		} catch ( err: any ) {
			setFieldError( err.field, err.message );
		}
	}

	return (
		<div className="auth_forgot auth_register">
			<PrimaryTitle className="auth_title">Вiдновлення паролю</PrimaryTitle>

			<Formik
				initialValues={{
					email: '',
					password: '',
					passwordConfirm: '',
					code: ''
				}}
				validationSchema={Yup.object( {
					email: Yup.string().email( 'Некоректний e-mail' ).required( 'заповнiть поле' ),
					password: Yup.string()
						.min( 4, 'мiн. довжина 4 символи' )
						.max( 32, 'Макс. довжина 32 символи' )
						.required( 'заповнiть поле' ),
					passwordConfirm: Yup.string()
						.required( 'Паролi не спiвпадають' )
						.oneOf( [ Yup.ref( 'password' ), null ], 'Паролi не спiвпадають' ),
					code: Yup.string().required( 'заповнiть поле' )
				} )}
				onSubmit={onSubmit}
			>
				{( formik ) => (
					<Form className="auth_form">
						<div className="auth_form-container">
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
												'Auth-GetResetCode',
												trim( formik.values.email ).toLowerCase()
											)
											.then( () => showNotification( 'info', 'Перевiрте ваш e-mail' ) )
											.catch( () => formik.setFieldError( 'email', 'Облiковий запис не знайдено' ) );
								}}
							>
								Надiслати код
							</GradientButton>

							<div className="auth_form-group">
								<Field
									title="Новий пароль"
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
								placeholder="Перевiрте свiй e-mail"
							/>
						</div>

						<GradientButton type="submit">Пiдтвердити</GradientButton>
					</Form>
				)}
			</Formik>

			<OutlineButton className="auth_back-btn" onClick={toLogin}>
				Назад
			</OutlineButton>
		</div>
	);
}
