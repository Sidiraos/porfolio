import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from './FontAwesome';
function Nav() {
	const navRef = useRef();
	useEffect(() => {
		console.log(navRef.current.offsetHeight);
		document.body.style.paddingTop = navRef.current.offsetHeight + 'px';
	});
	const [iconSize , setIconSize] = useState ("2xl")
	const [icon, setIcon] = useState([
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
			link: 'https://linkedin.com/in/sidiraos',
		},
		{
			id: 3,
			icon: 'fa-brands fa-twitter',
			size: iconSize,
			link: 'https://twitter.com/sidiraos',
		},
	]);
	return (
		<>
			<nav
				ref={navRef}
				className="navbar navbar-expand-md fixed-top navbar-dark bg-dark p-3 z-index-100"
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						MyPorfolio
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									className="nav-link"
									aria-current="page"
									to="#landing"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#projects">
									Projects
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#contact">
									Contact
								</Link>
							</li>
						</ul>

						<ul className="navbar-nav ms-auto">

							{icon.map((item) => {
								return (
									<li key={item.id} className="nav-item">
										<FontAwesome {...item} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Nav;
