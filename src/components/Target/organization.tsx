import React, { useState, useEffect } from 'react';
import rpc from 'utils/rpc';
import Cell from './cell';

type Action = {
	title: string;
	icon?: string;
};

const actionList: { [name: string]: Action } = {
	invite: {
		title: 'Запросити в органiзацiю',
		icon: 'handshake'
	},
	docs: {
		title: 'Показати посвiдчення'
	},
	cuff: {
		title: 'Надягнути наручники',
		icon: 'handcuffs'
	},
	uncuff: {
		title: 'Зняти наручники',
		icon: 'handcuffs'
	},
	tie: {
		title: 'Використати стяжки',
		icon: 'cable_tie'
	},
	untie: {
		title: 'Розрiзати стяжки',
		icon: 'cable_tie'
	},
	follow: {
		title: 'Тягнути за собою',
		icon: 'detain'
	},
	unfollow: {
		title: 'Вiдпустити',
		icon: 'detain'
	},
	headsack_enable: {
		title: 'Надягнути мiшок',
		icon: 'sack'
	},
	headsack_disable: {
		title: 'Зняти мiшок',
		icon: 'sack'
	},
	unmask: {
		title: 'Зiрвати маску',
		icon: 'mask'
	},
	frisk: {
		title: 'Оглянути',
		icon: 'backpack'
	},
	vehicle: {
		title: 'Сiсти у ТЗ'
	},
	heal: {
		title: 'Запропонувати лiкування',
		icon: 'pill'
	},
	reanimate: {
		title: 'Реанiмувати'
	},
	medcard_physical: {
		title: 'Видати довiдку про фiз. здоров’я',
		icon: 'medcard'
	},
	medcard_mental: {
		title: 'Видати довiдку про псих. здоров’я',
		icon: 'medcard'
	},
	military_id: {
		title: 'Видати вiйськовий квиток',
		icon: 'licenses'
	}
};


export default function TargetOrganization() {
	const [actions, setActions] = useState<string[]>([]);

	useEffect(() => {
		rpc.callClient('FactionActions-GetItems').then(setActions);
	}, []);

	function callAction(action: string) {
		rpc.callClient('FactionActions-Call', action);
	}

	return (
		<>
			{actions.map((item) => {
				const action = actionList[item];

				return (
					<Cell
						key={item}
						label={action.icon ?? item}
						title={action.title}
						onClick={() => callAction(item)}
					/>
				);
			})}
		</>
	);
}
