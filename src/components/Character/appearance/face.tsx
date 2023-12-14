import React from 'react';
import Slider from '../slider';

type Item = {
	id: number;
	name: string;
	max: number;
	gender?: number;
};

const items: Item[] = [
	{
		id: 0,
		name: 'Прищi',
		max: 23
	},
	{
		id: 3,
		name: 'Старiння',
		max: 14
	},
	{
		id: 6,
		name: 'Вiдтiнок обличчя',
		max: 11
	},
	{
		id: 7,
		name: 'Втрата вiд сонця',
		max: 10
	},
	{
		id: 9,
		name: 'Веснянки на обличчi',
		max: 17
	}
];

type Props = {
	update: (id: number, value: number) => void;
	values: [number, number][];
};

export default function Other({ values, update }: Props) {
	return (
		<div>
			{items.map((item) => (
				<Slider
					key={item.name}
					title={item.name}
					value={values[item.id][0]}
					min={-1}
					max={item.max}
					onChange={(value) => update(item.id, value)}
				/>
			))}
		</div>
	);
}
