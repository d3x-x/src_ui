import React from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';

export default function Database() {
	return (
		<Page>
			<Navbar title="База даних" />

			<List inset>
				<ListItem link="users/" title="Громадяни" />
				<ListItem link="vehicles/" title="Транспортнi засоби" />
				<ListItem link="/wanted/" title="Розшук" />
			</List>
		</Page>
	);
}
