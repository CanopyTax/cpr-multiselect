var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Loaders
					</div>
					<div className="cps-card__body">
						<button className="cps-btn +primary">
							<span className="cps-loader">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</button>
						<button className="cps-btn +primary +large">
							<span className="cps-loader">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</button>
					</div>
				</div>
				<Highlight className="html">
						{
`<button class="cps-btn +primary +large">
  <span class="cps-loader">
    <span></span>
    <span></span>
    <span></span>
  </span>
</button>
`
						}
					</Highlight>
				</div>
		)
	}
});
