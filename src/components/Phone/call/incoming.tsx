import React from 'react';
import { IoIosAlarm, IoIosText, IoIosCall } from 'react-icons/io';
import Info from './info';
import Controls from './controls';

type Props = {
	name: string;
	onControlClick: (control: string) => void;
};

const controls = [
	{
		name: 'remember',
		label: 'Нагадати',
		icon: IoIosAlarm
	},
	{
		name: 'message',
		label: 'Повiдомлення',
		icon: IoIosText
	},
	{
		name: 'decline',
		label: 'Вiдхилити',
		icon: IoIosCall
	},
	{
		name: 'accept',
		label: 'Вiдповiсти',
		icon: IoIosCall
	}
];

export default function IncomingCall({ name, onControlClick }: Props) {
	return (
		<div className="call_incoming">
			<Info status="стiльниковий" name={name} />

			<Controls items={controls} onClick={onControlClick} />
		</div>
	);
}
