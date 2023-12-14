import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';

type Props = {
	submit: () => void;
	cancel: () => void;
};

export default function HouseConfirm({ submit, cancel }: Props) {
	return (
		<div className="house_confirm">
			<div className="house_confirm-container">
				<PrimaryTitle className="house_confirm-title">
				Продаж будинку державi
				</PrimaryTitle>

				<p className="house_confirm-remark">
				Ви дiйсно хочете <b> продати будинок державi</b>?
				</p>

				<div className="house_confirm-buttons">
					<OutlineButton onClick={cancel}>Закрити</OutlineButton>
					<GradientButton onClick={submit}>продати</GradientButton>
				</div>
			</div>
		</div>
	);
}
