var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					JavaScript Widgets
				</div>
				<div className="cps-card__body">
					<ul>
						<li><a href="https://github.com/CanopyTax/cp-tooltip">Tooltip</a></li>
						<li><a href="https://github.com/CanopyTax/cp-select">Select Widget</a></li>
						<li><a href="https://github.com/CanopyTax/cp-multi-selector">Multi-select</a></li>
						<li><a href="https://github.com/CanopyTax/cp-autoscale-input">Input Auto-scaler</a></li>
					</ul>
				</div>
			</div>
		)
	}
});
