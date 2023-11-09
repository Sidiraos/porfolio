import React from 'react';
import myprofilePicture from '../../assets/imgProfile/profile.jpg';

function LandingPage() {


	return (
		<section id='landing' className="py-5 text-center title-style">
			<div className='container'>
				<div className='row'>
					<div className='col align-self-center landing-heading'>
						<h1><span className='greet-msg'>Hi,</span> <span className='hello-smiley'>👋</span></h1>
						<h1>My name is</h1>
						<h1 className='name-heading'>Sidiraos</h1>
						<h1>I am a Front-End Developer</h1>
					</div>

					<div className='col box-img d-none d-md-block'>
						<img src={myprofilePicture} alt="my profile" className='hero-img' />
					</div>

				</div>
			</div>
		</section>
	);
}

export default LandingPage;
