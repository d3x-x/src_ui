import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import images from 'utils/images';

export const items: { [name: string]: string } = {
	repair: 'Ремонт',
engine: 'Двигун',
transmission: 'Трансмiсiя',
brakes: 'Гальма',
turbo: 'Турбонаддув',
suspension: 'Пiдвiска',
engine_sound: 'Звук двигуна',
horn: 'Клаксон',
tint: 'Тонування',
plate: 'Номер',
lights: 'Фари',
neon: 'Неон',
paint: 'Фарбування',
rims: 'Диски',
spoiler: 'Спойлер',
front_bumper: 'Переднiй бампер',
rear_bumper: 'Заднiй бампер',
hood: 'Капот',
sideskirt: 'Порiг',
roof: 'Дах',
exhaust: 'Вихлоп',
grille: 'Решiтка',
frame: 'Каркас',
livery: 'Вiнiли'
};

type Props = {
	current?: string;
	offset: number;
	open: (name: string) => void;
	onScroll: (position: number) => void;
};

export default function LscCategories({ current, open, offset, onScroll }: Props) {
	const list = useRef<HTMLUListElement>(null);

	useEffect(() => {
		if (list.current && offset) list.current.scrollTo(offset, 0);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function onMouseWheel(event: React.WheelEvent<HTMLUListElement>) {
		if (!list.current) return;

		const currentScrollDelta = list.current.scrollLeft;

		list.current.scrollTo(currentScrollDelta + event.deltaY, 0);

		onScroll(list.current.scrollLeft);
	}

	return (
		<div className="lsc_categories">
			<ul ref={list} className="lsc_categories-list" onWheel={onMouseWheel}>
				{Object.entries(items).map(([key, name]) => (
					<li
						className={classNames('lsc_categories-item', { active: current === key })}
						key={key}
						onClick={() => open(key)}
					>
						<img src={images.getImage(`${key}.svg`, 'lsc')} alt={name} />

						<h3 className="lsc_categories-title">{name}</h3>
					</li>
				))}
			</ul>
		</div>
	);
}
