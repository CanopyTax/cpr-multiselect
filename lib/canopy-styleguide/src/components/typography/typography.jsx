var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Typography
				</div>
				<div className="cps-card__body">
					<div className="cps-row cps-regular">
						<div className="cps-col-xs-2"><span className="cps-pull-right">REGULAR</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-regular</span>
						</div>
						<div className="cps-col-xs-8 cps-text-muted-dark">
							<div>
								An economy based on endless growth is unsustainable
							</div>
							<div>
								Regular is the standard weight throughout the app
							</div>
						</div>
					</div>
					<div className="cps-row cps-semibold ">
						<div className="cps-col-xs-2"><span className="cps-pull-right">SEMIBOLD</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-semibold</span>
						</div>
						<div className="cps-col-xs-8 cps-text-muted-dark">An economy based on endless growth is unsustainable</div>
					</div>
				</div>
				<div className="cps-card__hr"></div>
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2"><span className="cps-pull-right">LARGE HEADER</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-header</span>
						</div>
						<div className="cps-col-xs-8 cps-header cps-text-muted-dark">
							<div>Font Size 40px</div>
							<div>Line Height 52px</div>
						</div>
					</div>
					<div className="cps-row">
						<div className="cps-col-xs-2"><span className="cps-pull-right">HEADER</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-header-sm</span>
						</div>
						<div className="cps-col-xs-8 cps-header-sm cps-text-muted-dark">
							<div>Font Size 32px</div>
							<div>Line Height 44px</div>
						</div>
					</div>
					<div className="cps-row ">
						<div className="cps-col-xs-2"><span className="cps-pull-right">SUBHEADER</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-subheader</span>
						</div>
						<div className="cps-col-xs-8 cps-subheader cps-text-muted-dark">
							<div>Font Size 24px</div>
							<div>Line Height 32px</div>
						</div>
					</div>
					<div className="cps-row">
						<div className="cps-col-xs-2"><span className="cps-pull-right">SUBHEADER 2</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-subheader-sm</span>
						</div>
						<div className="cps-col-xs-8 cps-subheader-sm cps-text-muted-dark">
							<div>Font Size 18px</div>
							<div>Line Height 28px</div>
						</div>
					</div>
					<div className="cps-row">
						<div className="cps-col-xs-2"><span className="cps-pull-right">BODY</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-body</span>
						</div>
						<div className="cps-col-xs-8 cps-body cps-text-muted-dark">
							<div>Font Size 16px</div>
							<div>Line Height 24px</div>
						</div>
					</div>
					<div className="cps-row">
						<div className="cps-col-xs-2"><span className="cps-pull-right">BODY 2</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-body-sm</span>
						</div>
						<div className="cps-col-xs-8 cps-body-sm cps-text-muted-dark">
							<div>Font Size 14px</div>
							<div>Line Height 20px</div>
						</div>
					</div>
					<div className="cps-row">
						<div className="cps-col-xs-2"><span className="cps-pull-right">CAPTION</span>
						</div>
						<div className="cps-col-xs-2"><span className="cps-pull-right">.cps-caption</span>
						</div>
						<div className="cps-col-xs-8 cps-caption cps-text-muted-dark">
							<div>Font Size 12px</div>
							<div>Line Height 16px</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
