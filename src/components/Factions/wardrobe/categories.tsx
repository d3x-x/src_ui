import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';

const items = {
	hat: 'Головний убiр',
	jacket: 'Куртка',
	shirt: 'Футболка',
	pants: 'Штани',
	shoes: 'Взуття',
	glasses: 'Окуляри',
	mask: 'Маска',
	accessories: 'Аксесуари',
	watch: 'Годинник',
	decals: 'Нашивки'
};


type Props = {
	current: string;
	setCategory: (name: string) => void;
};

export default function FactionWardrobeCategories({ current, setCategory }: Props) {
	return (
		<div className="faction-wardrobe_categories">
			{Object.entries(items).map(([name, title]) => (
				<div
					className={classNames('faction-wardrobe_categories-item', {
						active: current === name
					})}
					key={name}
					onClick={() => setCategory(name)}
				>
					<img src={images.getImage(`${name}.svg`)} alt={title} />
				</div>
			))}
		</div>
	);
}
