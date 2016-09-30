var React = require('react');

// Custom Components
var Nav = require('./nav.js');
var AboutSection = require('./aboutProgress.js');
var SingleOriginsSection = require('./singleOrigins.js');
var Blends = require('./blends.js');
var Lorem = require('./loremIpsum.js');
var Footer = require('./footer.js');

function getAppState(){
	return {

	}
};

var App = React.createClass({
	render: function(){
		return(
			<div className='main-container'>
				<Nav />

			    <div className="parallax-container valign-wrapper">
			    	<div className="section no-pad-bot">
			            <div className="container">
			                <div className="row center">
			                    <img src="img/Buffalo_Logo.png" className="logoPicture" alt="Buffalo Logo" />
			                </div>
			            </div>
			        </div>
			        <div className="parallax">
			            <img src="img/parallaxBackgrounds/01-rawBeans.jpg" alt="Raw Coffee Beans"/>
			        </div>
			    </div>

			    <AboutSection />

			    <div className="parallax-container valign-wrapper">
			        <div className="parallax">
			            <img src="img/parallaxBackgrounds/02-roastedBeans.jpg" alt="Roasted Coffee Beans"/>
			        </div>
			    </div>

			    <SingleOriginsSection />

			    <div className="parallax-container valign-wrapper">
			        <div className="parallax">
			            <img src="img/parallaxBackgrounds/03-finishedBags.jpg" alt="Finished Coffee Bags"/>
			        </div>
			    </div>

			    <Blends />

			    <div className="parallax-container valign-wrapper">
			        <div className="section no-pad-bot">
			            <div className="container">
			                <div className="row center">
			                    <h5 className="header col s12 light">
			                        A modern responsive front-end framework based on Material Design
			                    </h5>
			                </div>
			            </div>
			        </div>
			        <div className="parallax">
			            <img src="img/parallaxBackgrounds/04-cupOfCoffee.jpg" alt="Steaming Cup of Coffee"/>
			        </div>
			    </div>

			    <Lorem />

			    <Footer />

			</div>
		);
	},
});

module.exports = App;