import React from 'react';
import styles from './Footer.scss';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				<p className={styles.footerText}>
					© 2019 Akwasi Sefa-Boakye. All rights reserved.
				</p>
			</footer>
		);
	}
}
