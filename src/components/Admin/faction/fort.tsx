import React from 'react';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';

export default function AdminFactionWar() {
	async function startWar() {
		await rpc.callServer('Admin-StartFortWar');
		showNotification('success', 'Ви активували iвент');
	}

	return (
		<div className="admin_tab-container">
			<GradientButton type="submit" onClick={startWar}>
			Розпочати "Напад на ФЗ"
			</GradientButton>
		</div>
	);
}
