export const sections: {
	[name: string]: { [name: string]: string | [string, string] };
} = {
	player: {
		organization: 'Органiзацiя',
		docs: 'Документи',
		property: 'Власнiсть',
		others: 'iншi дiї'
	},
	self: {
		mood: 'Настрiй',
		walking: 'Стиль ходи',
		animations: 'Анiмацiї',
		docs: 'Документи'
	},
	vehicle: {
		seatbelt: 'Ремiнь безпеки',
		lock: 'Замок',
		doors: 'Дверi',
		trunk: 'Багажник',
		passengers: 'Висадити пасажира',
		refuel: 'Заправити',
		repair: 'Починити'
	}
};

export const groups: typeof sections = {
	organization: {},
	others: {
		money: 'Видати грошi',
		handshake: 'Пожмакати руку'
	},
	docs: {
		passport: 'Паспорт',
		licenses: 'Лiцензiї'
	},
	property: {
		vehicle: 'Продаж ТС',
		house: 'Продаж будинку',
		business: 'Продаж бiзнесу'
	},
	passengers: {},
	doors: {
		hood: 'Капот',
		front_left: ['Передн. лiва', 'дверi'],
		front_right: ['Передн. права', 'дверi'],
		rear_left: ['Задн. лiва', 'дверi'],
		rear_right: ['Задн. права', 'дверi']
	},
	trunk: {
		inventory: ['Вiдкрити', 'багажник'],
		access: ['Доступ', 'багажник']
	},
	mood: {
		normal: ['Звичайний', 'настрiй'],
		aiming: ['iгривий', 'настрiй'],
		angry: ['Злостний', 'настрiй'],
		drunk: ['П\'яний', 'настрiй'],
		happy: ['Щасливий', 'настрiй'],
		injured: ['Похмурий', 'настрiй'],
		stressed: ['Напружений', 'настрiй'],
		sulking: ['Ображений', 'настрiй']
	},
	walking: {
		normal: ['Звичайний', 'хода'],
		drunk: ['П\'яний', 'хода'],
		fat: ['Товстий', 'хода'],
		gangster: ['Ґангстер', 'хода'],
		quick: ['Поспiшаючий', 'хода'],
		sad: ['Сумний', 'хода'],
		injured: ['Травмований', 'хода']
	},
	animations: {}
};
