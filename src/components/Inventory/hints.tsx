import React from 'react';
import images from 'utils/images';

export default function InventoryHints() {
	return (
		<div className="inventory_hints">
    		<div className="inventory_hints-item">
        		<img src={images.getImage('esc-key.svg')} alt="лiва кнопка мишi" />
        		<p className="inventory_hints-text">
           		Натиснiть <br />
            	Щоб закрити iнвентар
        		</p>
    		</div>

    		<div className="inventory_hints-item">
        		<img src={images.getImage('mouse-left.svg')} alt="лiва кнопка мишi" />

        		<p className="inventory_hints-text">
            	Натиснiть на предмет <br />
            	Показати iнформацiю про предмет
        		</p>
    		</div>

    		<div className="inventory_hints-item">
        	<img src={images.getImage('zero-key.svg')} alt="лiва кнопка мишi" />

        	<p className="inventory_hints-text">
            Натиснiть <br />
            Щоб прибрати предмет з рук
        	</p>
    		</div>
		</div>
	);
}
