import React from 'react';
import rpc from 'utils/rpc';
import Tabs, { TabPane } from 'rc-tabs';
import { Formik, Form, Field } from 'formik';
import GradientButton from 'components/Common/gradient-button';
import Players from '../partials/players';

export default function AdminTeleport() {
	return (
		<div className="admin_teleport">
			<Formik
				initialValues={{ type: 'player', player: '', x: '', y: '', z: '' }}
				onSubmit={({ type, player, ...coords }) => {
					rpc.callServer('Admin-Teleport', [type, player, coords]);
				}}
			>
				{(formik) => (
					<Form>
						<Tabs
							prefixCls="admin_tabs"
							onChange={(key) => formik.setFieldValue('type', key)}
						>
							<TabPane tab="До гравця" key="player">
								<Players onChange={(data) => formik.setFieldValue('player', data.id)} />
								<GradientButton type="submit">Пiдтвердити</GradientButton>
							</TabPane>

							<TabPane tab="До себе" key="yourself">
								<Players onChange={(data) => formik.setFieldValue('player', data.id)} />
								<GradientButton type="submit">Пiдтвердити</GradientButton>
							</TabPane>

							<TabPane tab="На мiтку" key="waypoint">
								<GradientButton type="submit">Пiдтвердити</GradientButton>
							</TabPane>

							<TabPane tab="Координати" key="coords">
								<Field className="admin_field" type="number" name="x" placeholder="X" />
								<Field className="admin_field" type="number" name="y" placeholder="Y" />
								<Field className="admin_field" type="number" name="z" placeholder="Z" />

								<GradientButton type="submit">Пiдтвердити</GradientButton>
							</TabPane>
						</Tabs>
					</Form>
				)}
			</Formik>
		</div>
	);
}
