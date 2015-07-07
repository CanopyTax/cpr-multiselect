var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		      <div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header ">
						Lists
					</div>
					<div className="cps-card__body">

						<div className="cps-subheader-sm cps-margin-bottom-8">Inline Lists</div>
						<div className="cps-row">
							<div className="cps-col-xs-4">
								<ul className="cps-list-inline +pipes +underline">
									<li><a href>active</a></li>
									<li><a href>archived</a></li>
									<li><a href>deleted</a></li>
								</ul>
							</div>
							<div className="cps-col-xs-4">
								<ul className="cps-list-inline">
									<li><a href><i className="cps-icon cps-icon-list"></i></a></li>
									<li><a href><i className="cps-icon cps-icon-grid-view"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<ul class="cps-list-inline +pipes +underline">
  <li>active</li>
  <li>archived</li>
  <li>deleted</li>
</ul>


<ul class="cps-list-inline">
  <li><a href><i class="cps-icon cps-icon-list"></i></a></li>
  <li><a href><i class="cps-icon cps-icon-grid-view"></i></a></li>
</ul>
`
				}
				</Highlight>
			</div>
		);
	}
});
