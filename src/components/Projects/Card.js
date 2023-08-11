import React from 'react';

function Card({ img, title, description, link }) {
	return (
		<div className="card mb-5">
			<img src={img} className="card-img-top" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<a href={link} target="_blank">
				<button className="btn btn-primary">
					Click For Testing Demo Project
				</button>
			</a> 
			</div>


		</div>
	);
}

export default Card;
