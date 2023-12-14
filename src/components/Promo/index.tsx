import React from 'react';
import rpc from 'utils/rpc';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';

export default function Promo() {
	return (
		<div className="promo">
			<div className="promo_container">
				<PrimaryTitle className="promo_title">123</PrimaryTitle>

				<div className="promo_remark">
					
				</div>

				<div className="">
					<iframe
						title=""
						src=""
					></iframe>
				</div>

				<GradientButton onClick={() => rpc.callServer('Character-ShowCreator')}>
					123
				</GradientButton>
			</div>
		</div>
	);
}
