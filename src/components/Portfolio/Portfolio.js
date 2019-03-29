import React from 'react';
import styles from './Portfolio.scss';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.projects = [{
			id: 1,
			title: 'Bilingua',
			image: require('../../images/bilingua.png'),
			link: 'https://bilingua.io',
			details: 'A language exchange app designed to help people from different nationalities to easily learn languages of their interest through social interaction.',
		},{
			id: 2,
			title: 'Transwap',
			image: require('../../images/transwap.png'),
			link: 'https://transwap.com',
			details: 'A remittance website for money transfers in South-East asian countries.',
		},{
			id: 3,
			title: 'Imaginae',
			image: require('../../images/imaginae.png'),
			link: 'https://imaginae.fr',
			details: 'A web and mobile app for creating a community of authors and readers especially the French language.',
		}];
	}

	renderProjects = () => {
		return this.projects.map((project) => (
			<a href={project.link} target='_blank' rel='noopener noreferrer' key={project.id} className={styles.project}>
				<img src={project.image} alt='' />

				<h4>{project.title}</h4>

				<div className={styles.projectDetails}>
					<h4>{project.title}</h4>

					<p>{project.details}</p>
				</div>
			</a>
		));
	}

	render() {
		return (
			<section id='portfolio' className={styles.portfolio}>
				<h2>PORTFOLIO</h2>

				<div className={styles.portfolioContainer}>
					{this.renderProjects()}
				</div>
			</section>
		);
	}
}
