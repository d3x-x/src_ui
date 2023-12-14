import React, { Component } from 'react';
import {
	Page,
	Navbar,
	BlockHeader,
	BlockFooter,
	List,
	ListItem,
	ListButton
} from 'framework7-react';
import { showNotification } from 'utils/notifications';
import rpc from 'utils/rpc';
import prettify from 'utils/prettify';

type State = {
	zones: number;
	income: number;
};

export default class GangZones extends Component<{}, State> {
	readonly state: State = {
		zones: 0,
		income: 0
	};

	componentDidMount() {
		rpc.callServer( 'GangZones-GetInfo' ).then( ( data ) => this.setState( () => data ) );
	}

	async startWar() {
		try {
			await rpc.callServer( 'ZoneCapture-StartWar' );
			showNotification( 'success', 'Ви розпочали вiйну за територiю' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { zones, income } = this.state;

		return (
			<Page>
				<Navbar title="Територiї" />

				<BlockHeader>Вашi територiї</BlockHeader>
				<List inset>
					<ListItem title="Пiд контролем" after={zones.toString()} />
					<ListItem title="Прибутковiсть за годину" after={prettify.price( income )} />
				</List>

				<BlockHeader>Захоплення</BlockHeader>

				<List inset>
					<ListButton title="Почати захоплення" onClick={this.startWar.bind( this )} />
				</List>
				<BlockFooter>Позначте територiю на картi, щоб розпочати захоплення</BlockFooter>
			</Page>
		);
	}
}
