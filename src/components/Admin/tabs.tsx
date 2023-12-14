import React from 'react';
import Ban from './ban';
import Reports from './reports';
import Vehicle from './vehicle';
import Kick from './kick';
import Skin from './skin';
import Money from './money';
import Teleport from './teleport';
import Spectator from './spectator';
import Chat from './chat';
import House from './house';
import Demorgan from './demorgan';
import Faction from './faction';
import Journal from './journal';

type Tab = {
	name: string;
	component?: React.ComponentClass<any, any> | React.FunctionComponent;
};

const helperTabs: Tab[] = [
	{
		name: 'Кiк',
		component: Kick
	},
	{
		name: 'Деморган',
		component: Demorgan
	},
	{
		name: 'Телепорт',
		component: Teleport
	},
	{
		name: 'Репорти',
		component: Reports
	},
	{
		name: 'Спостереження',
		component: Spectator
	}
];

const adminTabs: Tab[] = [
	{
		name: 'Бан',
		component: Ban
	},
	{
		name: 'Транспорт',
		component: Vehicle
	},
	{
		name: 'Скiн гравця',
		component: Skin
	},
	{
		name: 'Повiдомлення',
		component: Chat
	}
];

const gmTabs: Tab[] = [
	{
		name: 'Валюта',
		component: Money
	},
	{
		name: 'Органiзацiї',
		component: Faction
	},
	{
		name: 'Журнал дiй',
		component: Journal
	}
];

const ownerTabs: Tab[] = [
	{
		name: 'Будинки',
		component: House
	}
];

export default [
	helperTabs,
	[...helperTabs, ...adminTabs],
	[...helperTabs, ...adminTabs, ...gmTabs],
	[...helperTabs, ...adminTabs, ...gmTabs, ...ownerTabs]
];
