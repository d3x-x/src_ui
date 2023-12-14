import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import vehicles from 'data/vehicles.json';

type Props = {
	name: string;
	owner: string;
	owners: number;
};

export default function DatabaseVehicle(props: Props) {
	const { name, owner, owners } = props;

	return (
		<Page>
			<Navbar title="ТС" backLink="Пошук" />

			<List inset>
			<ListItem title="Назва" after={(vehicles as any)[name] ?? name} />
			<ListItem title="Власник" after={owner} />
			<ListItem title="Усього власникiв" after={owners.toString()} />

			</List>
		</Page>
	);
}
