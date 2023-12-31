import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import Leader from './leader';
import FortWar from './fort';
import GangZone from './gang-zone';

export default function AdminFaction() {
	return (
		<div className="admin_faction">
			<Tabs prefixCls="admin_tabs">
				<TabPane tab="iвенти" key="fort">
					<FortWar />
				</TabPane>

				<TabPane tab="Територiї банд" key="zones">
					<GangZone />
				</TabPane>

				<TabPane tab="Лiдер" key="leader">
					<Leader />
				</TabPane>
			</Tabs>
		</div>
	);
}
