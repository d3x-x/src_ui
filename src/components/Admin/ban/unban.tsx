import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';

export default function Unban() {
	async function unbanPlayer( email: string ) {
		try {
			await rpc.callServer( 'Admin-Unban', email );

			showNotification( 'success', 'Гравець розбанений!' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	return (
		<Formik
			initialValues={{ email: '' }}
			onSubmit={( values ) => unbanPlayer( values.email )}
		>
			<Form>
				<Field className="admin_field" type="text" name="email" placeholder="email" />

				<GradientButton type="submit">Розбанити</GradientButton>
			</Form>
		</Formik>
	);
}
