import React, { Component } from 'react';
import rpc from 'utils/rpc';
import Slider from './slider';
import Options from './options';

const options: { [name: string]: string } = {
	nose: 'Нiс',
	brows: 'Брови',
	cheeks: 'Скули',
	eyes: 'Очi',
	lips: 'Губи',
	jaw: 'Челюсть',
	chin: 'Пiдборiддя'
};

const items: { [name: string]: string[] } = {
	nose: [
		'Ширина носа',
		'Висота носа',
		'Довжина кiнчика носа',
		'Глибина моста носа',
		'Висота кiнчика носа',
		'Змiщення носа'
	],
	brows: ['Висота брiв', 'Ширина брiв'],
	cheeks: ['Висота скул', 'Ширина скул', 'Ширина щiк'],
	eyes: ['Розмiр очей'],
	lips: ['Товщина губ'],
	jaw: ['Ширина щелепи', 'Форма щелепи'],
	chin: [
		'Висота пiдборiддя',
		'Глибина пiдборiддя',
		'Ширина пiдборiддя',
		'Товщина пiдборiддя',
		'Товщина шиї'
	]
};


type State = {
	activeOption: string;
	facedata: number[];
};

export default class CharacterFace extends Component<{}, State> {
	readonly state: State = {
		activeOption: 'nose',
		facedata: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	};

	componentDidMount() {
		rpc.callClient('CharCreator-GetState').then((data) => {
			this.setState(() => ({ facedata: data.facedata }));
		});
	}

	async changeFaceData(prop: number, value: number) {
		await this.setState((state) => ({
			facedata: state.facedata.map((item, index) => (prop === index ? value : item))
		}));

		rpc.callClient('Character-UpdateFaceOptions', [prop, value]);
	}

	selectOption(name: string) {
		this.setState(() => ({ activeOption: name }));
	}

	getStartIndex(option: string) {
		let index = 0;

		Object.entries(items).every(([name, list]) => {
			if (option === name) return false;

			index += list.length;

			return true;
		});

		return index;
	}

	render() {
		const { activeOption, facedata } = this.state;
		const startIndex = this.getStartIndex(activeOption);

		return (
			<div className="character_item character_item--face">
				{items[activeOption].map((item, index) => (
					<Slider
						key={item}
						title={item}
						value={facedata[startIndex + index]}
						step={0.1}
						min={-1}
						max={1.0}
						onChange={(value) => this.changeFaceData(startIndex + index, value)}
					/>
				))}

				<Options
					items={options}
					selected={activeOption}
					select={this.selectOption.bind(this)}
				/>
			</div>
		);
	}
}
