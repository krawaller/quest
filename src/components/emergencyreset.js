var React = require("react"),
	ReactDOM = require("react-dom"),
	ReactRedux = require("react-redux"),
	actions = require("./../actions"),
	Row = require("react-bootstrap").Row,
	Col = require("react-bootstrap").Col,
	Button = require("react-bootstrap").Button;

var EmergencyReset = React.createClass({
	handleClick: function() {
		localStorage.removeItem("Quest");
		this.props.resetGame(0);
	},
	render: function() {
		return (
			<Row>
				<Col md={12} style={ { textAlign: "center", marginTop: 5 } }>
					Somehow manage to break everything? Never fear!<br />
					<Button bsStyle="danger" style={{marginTop: 10}} bsSize="large" onClick={this.handleClick}>Emergency Reset</Button>
				</Col>
			</Row>
		);
	}
});

var mapDispatchToProps = function (dispatch) {
	return {
		resetGame: function(timeout) {
			dispatch(actions.resetGame(timeout));
		}
	}
};

module.exports = ReactRedux.connect(null, mapDispatchToProps)(EmergencyReset);