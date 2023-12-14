import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	email: string;
};

export default function AuthConfirm({ email }: Props) {
	return (
		<div className="auth_confirm">
			<PrimaryTitle className="auth_title">Невiдомий пристрiй</PrimaryTitle>

			<p className="auth_confirm-remark">
			Спроба входу iз невiдомого пристрою.
				<br />
				Будь ласка, пiдтвердьте, що це ви.
			</p>

			<Formik
				initialValues={{ code: '' }}
				validationSchema={Yup.object({
					code: Yup.string().required('заповнiть поле')
				})}
				onSubmit={(values, { setFieldError }) => {
					rpc
						.callServer('Auth-SignInWithCode', [email, values.code])
						.then(() => rpc.callClient('Auth-SuccessLogin', email))
						.catch(() => setFieldError('code', 'невiрний код'));
				}}
			>
				<Form className="auth_form">
					<Field
						title="код пiдтвердження"
						type="text"
						name="code"
						placeholder="Перевiрте свiй e-mail"
					/>

					<GradientButton type="submit">Пiдтвердити</GradientButton>
				</Form>
			</Formik>
		</div>
	);
}
