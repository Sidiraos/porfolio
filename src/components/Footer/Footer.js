import React from 'react';
import FontAwesome from '../Header/FontAwesome';

const Footer = () => {
	const iconSize = '2xl';
	const icon = [
		{
			id: 1,
			icon: 'fa-brands fa-github',
			size: iconSize,
			link: 'https://github.com/Sidiraos',
		},
		{
			id: 2,
			icon: 'fa-brands fa-linkedin',
			size: iconSize,
			link: 'https://www.linkedin.com/in/sidi-abdillah-sidi-500001225',
		},
		{
			id: 3,
			icon: 'fa-brands fa-twitter',
			size: iconSize,
			link: 'https://twitter.com/sidiraos',
		},
	];
	return (
		<div className="container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<span className="mb-3 mb-md-0 text-body-secondary">
						&copy; 2023 Sidiraos, Inc
					</span>
				</div>

				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					{icon.map((item) => {
						return (
							<li key={item.id} className="ms-3">
								<FontAwesome {...item} />
							</li>
						);
					})}
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
