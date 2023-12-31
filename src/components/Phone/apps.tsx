import Main from './main';
import Keypad from './keypad';
import Contacts from './contacts';
import Settings from './settings';
import Maps from './maps';
import Sim from './sim';
import Vehicles from './vehicles';
import Referral from './referral';
import Support from './support';

export type PhoneApp = {
	name: string;
	component: any;
	attached?: boolean;
};

const apps: { [key: string]: PhoneApp } = {
	maps: {
		name: 'Карти',
		component: Maps
	},
	sim: {
		name: 'Racoon', 
		component: Sim
	},
	referral: {
		name: 'Реферал',
		component: Referral
	},
	vehicles: {
		name: 'Транспорт',
		component: Vehicles
	},
	support: {
		name: 'Пiдтримка',
		component: Support
	},
	calls: {
		name: 'Дзвiнки',
		component: Keypad,
		attached: true 
	},
	contacts: {
		name: 'Контакти',
		component: Contacts,
		attached: true
	},
	messages: {
		name: 'Повiдомлення',
		component: Main,
		attached: true
	},
	settings: {
		name: 'Налаштування',
		component: Settings,
		attached: true
	}
	
};

export default apps;
