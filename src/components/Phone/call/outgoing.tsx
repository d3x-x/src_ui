import React from 'react';
import {
	IoIosMicOff,
	IoIosKeypad,
	IoIosAdd,
	IoIosPeople,
	IoIosCall
} from 'react-icons/io';
import Info from './info';
import Controls from './controls';

type Props = {
	name: string;
	callTime?: string;
	isRecieveCall: boolean;
	onControlClick: (control: string) => void;
};

const controls = [
	{
		name: 'mic',
		label: 'Вимкнути мiкрофон',
		icon: IoIosMicOff
	},
	{
		name: 'keypad',
		label: 'Клавiатура',
		icon: IoIosKeypad
	},
	{
		name: 'add',
		label: 'Додати',
		icon: IoIosAdd
	},
	{
		name: 'contacts',
		label: 'Контакти',
		icon: IoIosPeople
	},
	{
		name: 'decline',
		label: 'Вiдхилити',
		icon: IoIosCall
	}	
];

export default function OutgoingCall({ name, isRecieveCall, onControlClick }: Props) {
	return (
		<div className="call_outgoing">
			<Info
				name={name}
				status={isRecieveCall ? 'йде розмова': 'виклик на стiльниковий...'}
			/>

			<Controls items={controls} onClick={onControlClick} />
		</div>
	);
}
