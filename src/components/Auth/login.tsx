import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	setEmail: (email: string) => void;
	openForm: (name: any) => void;
	email: string;
};

export default function Login({ setEmail, openForm, email = '' }: Props) {
	return (
		<div className="auth_login">
			<PrimaryTitle>Авторизацiя</PrimaryTitle>

			<div className="auth_login-container">
				<Formik
					initialValues={{ email, password: '' }}
					validationSchema={Yup.object({
						email: Yup.string().email('Некоректний e-mail').required('заповнiть поле'),
						password: Yup.string().required('заповнiть поле')
					})}
					onSubmit={(values, actions) => {
						rpc
							.callServer('Auth-SignIn', Object.values(values))
							.then(() => rpc.callClient('Auth-SuccessLogin', values.email))
							.catch((err: any) => {
								if (err.confirm) {
									setEmail(values.email);
									return openForm('confirm');
								}

								actions.setFieldError(err.field, err.message);
							});
					}}
				>
					<Form className="auth_form">
						<Field
							title="Введiть e-mail"
							type="email"
							name="email"
							placeholder="@gmail.com"
						/>
						<Field
							title="Ваш пароль"
							type="password"
							name="password"
							placeholder="********"
						/>

						<a className="auth_login-forgot" onClick={() => openForm('forgot')}>
						Забули пароль?
						</a>

						<GradientButton type="submit">Увiйти</GradientButton>
					</Form>
				</Formik>

				<div className="auth_login-promo">
					<h3 className="title">Немає облiкового запису?</h3>

					<button className="create-button" onClick={() => openForm('register')}>
					Тисни сюди
					</button>

					<p className="descr">i створи його зараз</p>
				</div>
			</div>
		</div>
	);
}
