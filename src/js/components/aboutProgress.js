var React = require('react');

var AboutSection = React.createClass({
	render: function(){
		return(
			<div className="container">
		        <div className="section">
		        <h5 className="center" id="aboutProgress">
		            Our Story:
		        </h5>
		            <div className="row">
		                <div className="col s12 m12">
		                    <div className="icon-block">
		                        <p className="light center">
		                            Progress Coffee Roasting was birthed from a sweet little café called Progress Coffee on East 5th Street in Austin, Texas. Such a beautiful community grew and grew into a paragon of Progress that launched wonderfull coffee roasted by wonderful people. Now you can be part of the Progress by ordering here at the online store and the life and vitality of Progress will be delivered straight do your door.
		                        </p>
		                        <h5 className="center">
		                            Enjoy.
		                        </h5>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		)
	}
});

module.exports = AboutSection;