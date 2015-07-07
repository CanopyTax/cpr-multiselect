var React = require('react');
var _ = require('lodash');
var Highlight = require('react-highlight');

var icons = require('canopy-iconography/.fontcustom-manifest.json').glyphs;
icons = _.map(icons, function(icon, name) {
	return 'cps-icon-' + name;
});

module.exports = React.createClass({
	render: function() {

		icons.sort();

		var iconGroups = _.groupBy(icons, function(icon, i) {
			return i % 3;
		});

		return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header ">
						Canopy Font Icons
					</div>
					<div className="cps-card__body">
						<div className="cps-row">
							{_.map(iconGroups, function(group, i) {
								return <div className="cps-col-xs-4">
										{group.map(function(obj) {
											return <div className="cps-row cps-padding-top-8">
												<div className="cps-col-xs-6 cps-center-vertical">
													<span className="cps-pull-right">
														{obj}
													</span>
												</div>
												<div className="cps-col-xs-6 cps-center-vertical">
													<i className={"cps-icon " + obj}></i>
												</div>
											</div>
										})}
								</div>
							})}
						</div>
					</div>
					<div className="cps-card__hr"></div>
					<div className="cps-card__header ">
						Other Icons
					</div>
					<div className="cps-card__body">
						<div className="cps-row">
						{/** first column **/}
							<div className="cps-col-xs-4">
								<div className="cps-row">
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-left
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-left"></i>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-right
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-right"></i>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-up
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-up"></i>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											.cps-icon-sm-caret-down
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon  cps-icon-sm-caret-down"></i>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<span className="cps-pull-right">
											Wrapped Icons
										</span>
									</div>
									<div className="cps-col-xs-6 cps-center-vertical">
										<i className="cps-icon +round cps-bg-primary-green cps-white cps-icon-taxes"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cps-flexible-focus cps-card cps-margin-top-24">
					<div className="cps-card__header ">
						Canopy Labels
					</div>
					<div className="cps-card__body">
						<div className="cps-row">
							<div className="cps-col-xs-12">
								<ul className="cps-list-inline">
									<li>
										<div className="cps-label-square +x-large">
											<div className="cps-center-vertical">AC</div>
										</div>
									</li>
									<li>
										<div className="cps-label-square +medium">
											<div className="cps-center-vertical">AC</div>
										</div>
									</li>

									<li>
										<div className="cps-label-square +medium +active">
											<div className="cps-center-vertical">AC</div>
										</div>
									</li>
									<li>
										<div className="cps-label-square__add +medium">
											<div className="cps-center-vertical"><i className="cps-icon cps-icon-add-person"></i></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>



				<Highlight className="html">
				{
`<div class="cps-label-square +x-large">
  <div class="cps-center-vertical">AC</div>
</div>
<div class="cps-label-square +medium">
  <div class="cps-center-vertical">AC</div>
</div>
<div class="cps-label-square +medium +active">
  <div class="cps-center-vertical">AC</div>
</div>
`
				}
				</Highlight>

				<div className="cps-fixed-focus cps-card cps-margin-top-24">
					<div className="cps-card__header ">
						Icons with inline text
					</div>
					<div className="cps-card__body">
						<i className="cps-icon cps-icon-visible cps-warning"><span>Hello</span></i>
					</div>
				</div>



				<Highlight className="html">
				{
					`<i className="cps-icon cps-icon-visible cps-warning"><span>Hello</span></i>`
				}
				</Highlight>
			</div>

		)
	}
});
