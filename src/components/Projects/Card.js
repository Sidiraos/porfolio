import React from 'react';
import GitHubIcon from './svgFile/GitHubIcon';
import LivePreviewIcon from './svgFile/LivePreviewIcon';
import { useEffect } from 'react';

function Card({ img, title, description, link, codeLink, techStack, id }) {
	useEffect(() => {
		const el = document.getElementById(id);
		const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active")
                    } else {
                      entry.target.classList.remove("active")
                    }
                })
            }
        , {rootMargin : "-50px 0px"})
  
        observer.observe(el)
        
        return () => {
          observer.disconnect()
      }
	}, [id]);


	return (
		<div className="card mb-5">
			<img src={img} className="card-img-top" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<p>
					<span>Tech Stack : </span>{' '}
					<span className="tech-stack-span">{techStack}</span>
				</p>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-between">
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-dark text-decoration-none"
					>
						<LivePreviewIcon />{' '}
						<span className="text-decoration-underline">
							live preview
						</span>
					</a>
					<a
						href={codeLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-dark text-decoration-none"
					>
						<GitHubIcon />{' '}
						<span className="text-decoration-underline">
							view code
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
