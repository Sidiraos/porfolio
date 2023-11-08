import React, { useEffect, useRef, useState } from 'react';
import { Link , NavLink } from 'react-router-dom';
import FontAwesome from './FontAwesome';
function Nav() {
	const navRef = useRef();
	const iconSize = "2xl";
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
	] ;


	return (
		<>
			<nav
				ref={navRef}
				className="navbar navbar-expand-md bg-light p-3 "
			>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/porfolio">
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
						<div className="navbar-nav">
								<Link
									className="nav-link"
									aria-current="page"
									to="#landing"
								>
									Home
								</Link>

								<Link
									className="nav-link"
									aria-current="page"
									to="#tech-stack"
								>
									Tech Stack
								</Link>
						
							
								<Link className="nav-link" to="#projects">
									Projects
								</Link>
							
						
								<Link className="nav-link" to="#contact">
									Contact
								</Link>
						
								<Link className="nav-link" to="about">
									About Me
								</Link>
							
						</div>

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
