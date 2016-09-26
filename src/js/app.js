// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./components/App');
// var appAPI = require('./utils/AppAPI.js');
// var ProductData = require('./ProductData');
// var CartAPI = require('./utils/CartAPI');

// Load Product Data into local storage
// ProductData.init();

// This code here allows us to render our main component (in this case "Parent")
ReactDOM.render(

	<App />,
	document.getElementById('app')
)