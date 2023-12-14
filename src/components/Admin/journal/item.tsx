import React from 'react';
import moment from 'moment-timezone';

const actions: { [name: string]: string } = {
	ban: 'Бан',
	unban: 'Розбан',
	kick: 'Кiк',
	demorgan: 'Деморган',
	prison_release: 'Визволення',
	house_add: 'Дiм +',
	house_delete: 'Дiм -',
	vehicle_create: 'ТЗ +',
	money: 'Валюта',
	skin: 'Скiн',
	notify: 'повiдомлення'
};

type Props = {
	admin: string;
	action: string;
	message: string;
	time: string;
};

export default function AdminReportsItem({ admin, action, message, time }: Props) {
	return (
		<div className="admin_reports-item">
			<span className="admin_reports-sender">{admin}</span>
			<p className="admin_reports-message">{message}</p>

			<span className="admin_reports-time">
				<strong>{actions[action]} | </strong> {moment(time).format('DD.MM.YY, HH:mm')}
			</span>
		</div>
	);
}
