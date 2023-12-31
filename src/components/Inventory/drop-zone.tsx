import React from 'react';
import Cell from './cell';

type Props = {
	onDrop: (id: number) => void;
};

export default function InventoryDropZone({ onDrop }: Props) {
	return (
		<div className="inventory_drop">
			<div className="inventory_drop-info">
				<h3 className="inventory_drop-title">Викинути предмет</h3>
				<p className="inventory_drop-desc">Перетягнiть його сюди</p>
			</div>

			<Cell className="inventory_drop-cell" id={228} onDrop={onDrop} />
		</div>
	);
}
