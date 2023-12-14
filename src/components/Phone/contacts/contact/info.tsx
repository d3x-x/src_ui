import React from 'react';
import prettify from 'utils/prettify';

type Props = {
	phone: string;
};

export default function ContactInfo({ phone }: Props) {
	return (
		<div className="contacts_contact-info">
			<ul>
				<li>
					<h4>стiльниковий</h4>
					<p>{prettify.phoneNumber(phone)}</p>
				</li>
			</ul>
		</div>
	);
}
