import React from 'react';
import images from 'utils/images';

const items: { [name: string]: string } = {
	cash_out: 'Зняти грошi',
	replenish: 'Поповнити баланс',
	transfer: 'Банкiвський переказ',
	house: 'Сплатити за будинок',
	bank: 'Вiдкрити рахунок',
	business: 'Сплатити за бiзнес'
};


type Props = {
	openTab: (name: string) => void;
};

export default function BankTabs({ openTab }: Props) {
	return (
		<div className="bank_tabs">
			<ul className="bank_tabs-list">
				{Object.entries(items).map(([name, title]) => (
					<li className="bank_tabs-item" key={name} onClick={() => openTab(name)}>
						<div className="container">
							<img src={images.getImage(`${name}.svg`)} alt={title} />

							<h4>{title}</h4>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
