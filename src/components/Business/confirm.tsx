import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';

type Props = {
	submit: () => void;
	cancel: () => void;
};

export default function BusinessConfirm({ submit, cancel }: Props) {
	return (
		<div className="business_confirm">
			<div className="business_confirm-container">
				<PrimaryTitle className="business_confirm-title">
				Продаж бiзнесу державi
				</PrimaryTitle>

				<p className="business_confirm-remark">
				Ви дiйсно хочете <b> продати бiзнес державi</b>?
				</p>

				<div className="business_confirm-buttons">
					<OutlineButton onClick={cancel}>Закрити</OutlineButton>
					<GradientButton onClick={submit}>Продати</GradientButton>
				</div>
			</div>
		</div>
	);
}
