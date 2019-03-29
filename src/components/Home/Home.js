import PropTypes from 'prop-types';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from './Home.scss';

export default class Home extends React.Component {
	static propTypes = {
		isHeaderSticky: PropTypes.bool.isRequired,
	}

	render() {
		const buttonMiscStyle = this.props.isHeaderSticky ? 'scale-down': '';

		return (
			<section id='home' className={styles.home}>
				<div className={styles.homeImage}>
					<h3 className={styles.imageText}>Hi Visitor,</h3>

					<h1 className={styles.imageText}>So let's get started</h1>

					<p className={styles.imageText}>I'm a remote Frontend Developer based in Ghana</p>

					<a className={styles.imageButton} href='#about'>WANT MORE »</a>
				</div>

				<a
					className={`${styles.imageButton} ${styles.scrollButton} ${buttonMiscStyle}`}
					href='#about'>
					<FiChevronDown size={64} />
				</a>
			</section>
		);
	}
}
