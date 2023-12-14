import React from 'react';
import classNames from 'classnames';
import images from 'utils/images';
import prettify from 'utils/prettify';
import PrimaryTitle from 'components/Common/primary-title';
import GradientButton from 'components/Common/gradient-button';

const licenses = {
	house: {
		name: 'Будинок',
		description: 'Дозволяє мати 2 будинки'
	},
	business: {
		name: 'Бiзнес',
		description: 'Дозволяє придбати 1 бiзнес'
	},
	car: {
		name: 'Легковi ТЗ',
		description: 'Дозволяє керувати легковими ТЗ'
	},
	motorcycle: {
		name: 'Мотоцикли',
		description: 'Дозволяє керувати мотоциклами'
	},
	boat: {
		name: 'Човни',
		description: 'Дозволяє керувати водними ТЗ'
	},
	air: {
		name: 'Повiтрянi ТЗ',
		description: 'Дозволяє керувати повiтряними ТЗ'
	},
	truck: {
		name: 'Вантажiвки',
		description: 'Дозволяє керувати вантажiвками'
	},
	weapon: {
		name: 'Зброя',
		description: 'Потрiбно для носiння зброї'
	},
	fishing: {
		name: 'Риболовля',
		description: 'Потрiбно для вилову риби в бiльшому обсязi'
	}
};

type Props = {
	name: string;
	price: number;
	bought: boolean;
	buy: () => void;
};

export default function LicensesItem({ name, price, bought, buy }: Props) {
	return (
		<div
			className={classNames('licenses_item', {
				disabled: bought
			})}
			style={{
				backgroundImage: `${
					bought ? 'linear-gradient(black, black),' : ''
				} url(${images.getImage(`${name}.jpg`, 'licenses')})`
			}}
		>
			<PrimaryTitle className="licenses_item-title">Лiцензiя</PrimaryTitle>
			<h3 className="licenses_item-subtitle">На {(licenses as any)[name].name}</h3>

			{!bought ? (
				<>
					<p className="licenses_item-info">{(licenses as any)[name].description}</p>

					<div className="licenses_item-price">
						<h4>Вартiсть</h4>

						<span>{prettify.price(price)}</span>
					</div>

					<GradientButton className="licenses_item-buy" onClick={buy}>
						Купити
					</GradientButton>
				</>
			) : (
				<>
					<span className="licenses_item-checkmark" />
				</>
			)}
		</div>
	);
}
