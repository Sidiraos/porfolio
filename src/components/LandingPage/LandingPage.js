import React, { useState } from 'react';
import myprofilePicture from '../../assets/imgProfile/profile.jpg';

function LandingPage() {
	const intro =
		"Hello there! I'm Sidiraos, a passionate and creative Front-End Developer with expertise in crafting seamless and visually stunning web experiences. With a solid foundation in HTML, CSS,and JavaScript, I've honed my skills to perfection and can confidently navigate through the latest trends in web development. My coding journey has led me to specialize in various cutting-edge technologies, making me proficient in Sass,Bootstrap, Tailwind CSS, and React. Here's a glimpse of what I bring to the table:";

	const [skills, setSkills] = useState([
		{
			title: 'Sass Sorcery: Armed with the power of Sass',
			p: 'I wield the magic of variables, mixins, and nesting to effortlessly manage and organize styles, creating scalable and maintainable CSS for any project.',
		},
		{
			title: 'Bootstrap Brilliance',
			p: 'With its responsive grid system and extensive component library, I effortlessly create responsive, mobile-first designs that delight users across all devices',
		},
		{
			title: 'Tailwind CSS Tamer',
			p: 'For more customized and tailor-made designs, I harness the capabilities of Tailwind CSS. Its utility-first approach allows me to craft unique user interfaces with minimal effort and maximum flexibility.',
		},
		{
			title: 'React Alchemist',
			p: `Embracing the power of React, I construct dynamic and
			interactive web applications that elevate user experiences to
			the next level. From component-based architecture to state
			management, React is my playground. As a developer who believes
			in constant growth and learning, I am always up-to-date with the
			latest industry trends and strive to implement best practices in
			every project. My attention to detail, pixel-perfect designs,
			and code cleanliness are reflections of my dedication to
			delivering top-notch results. When I'm not immersed in code, you
			can find me: Exploring new coding challenges and open-source
			projects. Attending tech meetups and conferences to stay
			connected with the vibrant developer community. Diving into
			design principles to enhance my UX/UI skills further. Enjoying
			the great outdoors and seeking inspiration from nature. Join me
			on my journey as we create immersive web experiences together.
			Let's collaborate on your next project and turn your vision into
			reality. Feel free to reach out and let's create something
			extraordinary! Remember, the web is an ever-changing canvas, and
			I'm here to paint masterpieces with code. Let's build a
			brighter, better web together!`,
		},
	]);
	return (
		<section id='landing' className="py-5 text-center">
			<img
				src={myprofilePicture}
				alt="Avatar"
				className="rounded-circle mb-3 "
				width={300}
				height={300}
			/>
			<h1>Sidiraos</h1>
			<div className="lead px-5">
				{intro}
			</div>
			{skills.map((skill, index) => {
					return (
						<div className='mt-4' key={index}>
							<h4 className={`skill skill${index+1}`}>{skill.title}</h4>
						</div>
					);
				})}
		</section>
	);
}

export default LandingPage;
