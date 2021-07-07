
var React= require('react');
var createReactClass = require('create-react-class');
var $ = require('jquery');
var Home = createReactClass({
	getInitialState: function() {
		return {
			content_id : 'home',
			content : ''
		};
	},
	componentWillMount: function() {

		var content = { __html: $('#'+this.state.content_id).html()};
		this.setState({content: content});
	},
	render: function() {
		return (
			<div className="examples" dangerouslySetInnerHTML={this.state.content}>
			</div>
		);
	}
});
module.exports = Home;