import React, { Component } from 'react';
import { Router } from 'framework7/types';
import {
	Page,
	Navbar,
	List,
	ListItem,
	ListButton,
	BlockHeader,
	AccordionContent
} from 'framework7-react';
import moment from 'moment-timezone';
import rpc from 'utils/rpc';
import prettify from 'utils/prettify';
import vehiclesList from 'data/vehicles.json';

type Props = { f7router: Router.Router } & {
	userId: string;
	registrationAt: string;
	bankAccount: string;
	phone: string;
	vehicles: { name: string; govNumber: string }[];
};

export default class DatabaseUser extends Component<Props> {
	async getWantedData() {
		const { f7router, userId } = this.props;

		const data = await rpc.callServer('WantedList-FindById', userId);

		if (data) f7router.navigate('/wanted/item/', { props: { data } });
		else f7router.navigate('/wanted/form/', { props: { userId } });
	}

	render() {
		const { userId, registrationAt, bankAccount, phone, vehicles } = this.props;

		return (
			<Page>
				<Navbar title="Громадянин" backLink="Поиск" />

				<BlockHeader>Основна iнформацiя</BlockHeader>
				<List inset>
					<ListItem
						title="Прибуття до штату"
						after={moment(registrationAt).format('DD.MM.YYYY')}
					/>
					<ListItem title="Банк. рахунок" after={prettify.phoneNumber(bankAccount)} />
					<ListItem title="Телефон" after={prettify.phoneNumber(phone)} />
				</List>

				<BlockHeader>Майно</BlockHeader>
				<List accordionList inset>
					<ListItem accordionItem title="Транспорт">
						<AccordionContent>
							<List>
								{vehicles.map((item, index) => (
									<ListItem
										key={index}
										title={(vehiclesList as any)[item.name] ?? item.name}
										after={item.govNumber}
									/>
								))}
							</List>
						</AccordionContent>
					</ListItem>
				</List>

				<List inset>
					<ListItem link="#" title="Розшук" onClick={this.getWantedData.bind(this)} />
				</List>

				<List inset>
					<ListButton link="/fine/" title="Виписати штраф" routeProps={{ userId }} />
					<ListButton
						link="/arrest/"
						title="Заарештувати"
						color="red"
						routeProps={{ userId }}
					/>
				</List>
			</Page>
		);
	}
}
