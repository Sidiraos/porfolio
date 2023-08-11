import React from 'react';
import {Link} from 'react-router-dom';

function FontAwesome({ icon, size, link }) {
	return (
		<Link className="nav-link" to={link} target='_blank' rel="noopener noreferrer">
			<i className={`${icon} fa-${size}`} aria-hidden="true"></i>
		</Link>
	);
}

export default FontAwesome;
