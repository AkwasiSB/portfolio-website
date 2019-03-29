import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import styles from './App.scss';

export default class App extends React.Component {
	state = {
		isHeaderSticky: false,
		activeNavLink: 'Home',
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleWindowScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleWindowScroll);
	}

	handleWindowScroll = () => {
		const header = document.getElementById('navbar');
		const sticky = header.offsetTop;
		let homeHeight = document.getElementById('home').offsetHeight;
		let aboutHeight = document.getElementById('about').offsetHeight;
		let portfolioHeight = document.getElementById('portfolio').offsetHeight;

		homeHeight += 60;
		aboutHeight += homeHeight;
		portfolioHeight += aboutHeight;

		if (window.pageYOffset < homeHeight) {
			this.setState({
				activeNavLink: 'Home',
				isHeaderSticky: window.pageYOffset > sticky ? true : false
			});
		}
		else if (window.pageYOffset >= homeHeight && window.pageYOffset < aboutHeight) {
			this.setState({
				activeNavLink: 'About',
				isHeaderSticky: window.pageYOffset > sticky ? true : false
			});
		}
		else if (window.pageYOffset >= aboutHeight && window.pageYOffset <= portfolioHeight) {
			this.setState({
				activeNavLink: 'Portfolio',
				isHeaderSticky: window.pageYOffset > sticky ? true : false
			});
		}
	}

	render() {
		const { isHeaderSticky, activeNavLink } = this.state;

		return (
			<div className={styles.mainContainer}>
				<Header isSticky={isHeaderSticky} activeNavLink={activeNavLink} />

				<main className={`${styles.content} ${isHeaderSticky ? 'paddTop' : ''}`}>
					<Home isHeaderSticky={isHeaderSticky} />
					<About />
					<Portfolio />
				</main>

				<Footer />
			</div>
		);
	}
}
