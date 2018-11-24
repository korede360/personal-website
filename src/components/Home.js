import * as React from 'react';
import './Home.css';

// yarn add react-feather for the Twitter, LinkedIn and GitHub icons.

const Home = () => (
	<div>
		<div className="section" style={styles.blackBackgound} id="section1">
			<div className="section-group">
				<p className="header-text" style={styles.whiteText}>Oluwakorede Fashokun</p>
				<p className="header-description" style={styles.whiteText}>
					Fullstack web and mobile developer in Lagos, Nigeria.
				</p>
			</div>
		</div>
		<div className="section" style={styles.whiteBackground} id="section2">
			<div className="section-group">
				<p className="header-text" style={styles.blackText}>Welcome!</p>
				<a href="#section1">
					<p className="header-description" style={styles.blackText}>
						I am Oluwakorede Fashokun, a web and mobile developer in Lagos, Nigeria.
					</p>
				</a>
			</div>
		</div>
		<div className="section" style={styles.darkGreyBackground} id="section3">
			<div className="section-group">
				<p className="header-text" style={styles.whiteText}>About Me!</p>
				<a href="#section2">
					<p className="header-description" style={styles.whiteText}>
						I am a full stack web developer and mobile developer. I build websites using React, mobile apps with React Native, and backend APIs with Node.js
					</p>
				</a>
			</div>
		</div>
		<div className="section" style={styles.whiteBackground} id="section1">
			<div className="section-group">
				<p className="header-text" style={styles.blackText}>Open Source Contributions</p>
				<p className="header-description" style={styles.blackText}>
					All my side (and abandoned projects) are available on my GitHub account. Check my GitHub profile here to see what I'm currently up to!
				</p>
			</div>
		</div>
		<div className="section" style={styles.blackBackgound} id="section3">
			<div className="section-group">
				<p className="header-text" style={styles.whiteText}>Community</p>
				<a href="#section2">
					<p className="header-description" style={styles.whiteText}>
						From ALC meetups to developer conferences, I am an active member of the developer community in the Nigerian tech ecosystem. Haven't given any talks yet though! ;-)
					</p>
				</a>
			</div>
		</div>
		<div className="section" style={styles.whiteBackground} id="section1">
			<div className="section-group">
				<p className="header-text" style={styles.blackText}>Get in touch</p>
				<p className="header-description" style={styles.blackText}>
					Web and mobile developer in Lagos, Nigeria.
				</p>
			</div>
		</div>

	</div>
);

const colors = {
	black: '#000000',
	white: '#FFFFFF',
	darkGrey: '#505050'
};

const styles = {
	blackBackgound: {
		backgroundColor: colors.black
	},
	whiteBackground: {
		backgroundColor: colors.white
	},
	darkGreyBackground: {
		backgroundColor: colors.darkGrey
	},
	blackText: {
		color: '#000000'
	},
	whiteText: {
		color: '#FFFFFF'
	}
}


export default Home;
