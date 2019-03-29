import PropTypes from 'prop-types';
import React from 'react';
import styles from './Header.scss';

export default class Header extends React.Component {
	static propTypes = {
		isSticky: PropTypes.bool.isRequired,
		activeNavLink: PropTypes.string.isRequired,
	}

	state = {
		isHomeActive: true,
		isAboutActive: false,
		isPortfolioActive: false,
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeNavLink !== this.props.activeNavLink) {
			this.setState({
				isHomeActive: this.props.activeNavLink === 'Home' ? true : false,
				isAboutActive: this.props.activeNavLink === 'About' ? true : false,
				isPortfolioActive: this.props.activeNavLink === 'Portfolio' ? true : false
			});
		}
	}

	onNavLinkClicked = (key) => () => {
		this.setState({
			isHomeActive: key === 'Home' ? true : false,
			isAboutActive: key === 'About' ? true : false,
			isPortfolioActive: key === 'Portfolio' ? true : false
		});
	}

	render() {
		const { isHomeActive, isAboutActive, isPortfolioActive } = this.state;
		const { isSticky } = this.props;

		return (
			<nav id='navbar' className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
				<a className={styles.webLogo} href='#'>
					<span className={styles.logoContent}>A</span>
				</a>

				<ul className={styles.navMenu}>
					<li>
						<a
							className={`${styles.navlink} ${isHomeActive ? 'active' : ''}`}
							href='#'
							onClick={this.onNavLinkClicked('Home')}>
							HOME
						</a>
					</li>

					<li>
						<a
							className={`${styles.navlink} ${isAboutActive ? 'active' : ''}`}
							href='#about'
							onClick={this.onNavLinkClicked('About')}>
							ABOUT
						</a>
					</li>

					<li>
						<a
							className={`${styles.navlink} ${isPortfolioActive ? 'active' : ''}`}
							href='#portfolio'
							onClick={this.onNavLinkClicked('Portfolio')}>
							PORTFOLIO
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
