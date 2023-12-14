import React from 'react';
import rpc from 'utils/rpc';
import Select from 'react-select';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import factions from 'data/factions.json';

export default function AdminGangZone() {
	async function setOwner( faction: string ) {
		try {
			await rpc.callServer( 'Admin-SetZoneOwner', faction );
			showNotification( 'success', 'Призначено нового власника територiї' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	return (
		<Formik
			initialValues={{ faction: '' }}
			validationSchema={Yup.object( {
				faction: Yup.string().required()
			} )}
			onSubmit={( { faction } ) => setOwner( faction )}
		>
			{( formik ) => (
				<Form>
					<Select
						className="admin_select"
						classNamePrefix="admin_select"
						placeholder="Органiзацiя"
						options={Object.entries( factions ).map( ( [ value, label ] ) => ( {
							value,
							label
						} ) )}
						noOptionsMessage={() => 'Не знайдено'}
						onChange={( option ) => formik.setFieldValue( 'faction', option?.value )}
					/>

					<GradientButton type="submit">Призначити</GradientButton>
				</Form>
			)}
		</Formik>
	);
}
