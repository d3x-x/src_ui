import React, { Component } from 'react';
import { Router } from 'framework7/types';
import {
	Page,
	Navbar,
	List,
	ListItem,
	ListButton,
	BlockHeader,
	Block
} from 'framework7-react';
import moment from 'moment-timezone';
import rpc from 'utils/rpc';

type Props = {
	f7router: Router.Router;

	data: {
		id: string;
		suspect: string;
		reason: string;
		priority: number;
		createdAt: string;
	};

	onRemove?: (id: string) => void;
};
type State = Props['data'];

export default class WantedItem extends Component<Props, {}> {
	readonly state: State = {
		id: '4324ff',
		suspect: 'Test Testovich',
		reason: '1.2, 1.1',
		createdAt: '',
		priority: 2
	};

	componentDidMount() {
		this.setState(() => this.props.data);
	}

	async removeItem() {
		const { id } = this.state;

		await rpc.callServer('WantedList-RemoveItem', id);

		if (this.props.onRemove) this.props.onRemove(id);
		this.props.f7router.back();
	}

	render() {
		const { suspect: name, reason, priority, createdAt } = this.state;

		return (
			<Page>
				<Navbar title="Орiєнтування" backLink="Назад" />

				<BlockHeader>Основна iнформацiя</BlockHeader>
				<List inset>
					<ListItem title="iм`я" after={name} />
					<ListItem title="Прiоритет" after={priority} />
				</List>

				<BlockHeader>Опис</BlockHeader>
				<Block strong inset>
					<p>{reason}</p>
				</Block>

				<List inset>
					<ListItem
						title="Дата складання"
						after={moment(createdAt).format('DD.MM.YY, HH:mm')}
					/>
				</List>

				<List inset>
					<ListButton
						title="Прибрати розшук"
						color="red"
						onClick={this.removeItem.bind(this)}
					/>
				</List>
			</Page>
		);
	}
}
