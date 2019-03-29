import React from 'react';
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { FaAngellist, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../images/profile-image.png';
import styles from './About.scss';

export default class About extends React.Component {
	constructor(props) {
		super(props);

		this.mySkills = ['C/GTK+', 'HTML & CSS', 'Javascript', 'HTML5 & CSS3', 'Git', 'Bootstrap', 'React.js', 'React-Native', 'Express.js', 'ES6', 'GraphQL/Apollo', 'Redux', 'Webpack', 'Babel', 'Yarn', 'npm', 'SCSS/SASS', 'ESLint', 'Jest', 'TypeScript', 'Enzyme', 'TDD', 'BEM', ' Node.js', 'WebRTC', 'SQL/MySQL', 'SQLite', 'JSON/XML', 'jQuery', 'Cordova', 'SinonJS', 'AJAX'];
	}

	renderSkills = () => (
		this.mySkills.map((skill, index) => (
			<div key={index} className={styles.skill}>{skill}</div>
		))
	)

	render() {
		return (
			<section id='about' className={styles.about}>
				<h2>ABOUT ME</h2>

				<div className={styles.aboutContainer}>
					<div className={styles.aboutDetails}>
						<div className={styles.aboutProfile}>
							<img className={styles.aboutPhoto} src={profileImage} alt='' />

							<h3>Akwasi Sefa-Boakye</h3>

							<p><strong>Frontend Developer</strong></p>

							<div className={styles.socialContainer}>
								<a
									href='mailto:akwasisefaboakye@yahoo.com'
									target='_blank'
									rel='noopener noreferrer'
									className={`${styles.socialLink} -yahoo`}>
									<FaEnvelope size={20} />
								</a>

								<a
									href='https://www.facebook.com/akwasisefaboakye'
									target='_blank'
									rel='noopener noreferrer'
									className={`${styles.socialLink} -facebook`}>
									<IoLogoFacebook size={20} />
								</a>

								<a
									href='https://twitter.com/kwasisefaboakye'
									target='_blank'
									rel='noopener noreferrer'
									className={`${styles.socialLink} -twitter`}>
									<IoLogoTwitter size={20} />
								</a>

								<a
									href='https://linkedin.com/in/akwasisefaboakye'
									target='_blank'
									rel='noopener noreferrer'
									className={`${styles.socialLink} -linkedin`}>
									<IoLogoLinkedin size={20} />
								</a>

								<a
									href='https://angel.co/akwasi-sefa-boakye'
									target='_blank'
									rel='noopener noreferrer'
									className={`${styles.socialLink} -angellist`}>
									<FaAngellist size={20} />
								</a>

								<a
									href='https://github.com/AkwasiSB'
									target='_blank'
									rel='noopener noreferrer'
									className={`${styles.socialLink} -github`}>
									<FaGithub size={20} />
								</a>
							</div>
						</div>

						<div className={styles.aboutInfo}>
							<p>Hi, I’m Akwasi Sefa-Boakye. I’m passionate about what I do, and I love to help people. Nothing is more fulfilling than being part of a team with similar interests, and an organization that values its employees.</p>

							<p>Frontend Developer and Founder with the passion to drive projects to success</p>
						</div>
					</div>

					<div className={styles.aboutSkills}>
						<h3>Skills</h3>

						<div className={styles.skillsContainer}>{this.renderSkills()}</div>
					</div>
				</div>
			</section>
		);
	}
}
