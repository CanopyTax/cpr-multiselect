var React = require('react');
var Highlight = require('react-highlight');


module.exports = React.createClass({
		render: function() {
			return (
			<div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header">
						<h3 className="cps-subheader">Buttons</h3>
					</div>
					<div className="cps-card__body">

						<div className="cps-subheader-sm cps-margin-bottom-8">Raised Buttons</div>
						<div className="cps-row cps-margin-bottom-12">
							<div className="cps-col-xs-12">
								<button className="cps-btn +primary">primary</button>
								<button className="cps-btn +secondary">secondary</button>
								<a href className="cps-btn +primary">PRIMARY link</a>
								<a href className="cps-btn +secondary">secondary link</a>
								<button className="cps-btn +primary"><span className="cps-icon cps-icon-upload"></span> primary</button>
								<a href className="cps-btn +primary">PRIMARY link <span className="cps-icon cps-icon-upload"></span></a>
							</div>
						</div>
						<div className="cps-row margin-top-24">
							<div className="cps-col-xs-12">
								<button className="cps-btn +primary +disabled">PRIMARY</button>
								<button className="cps-btn +secondary" disabled>secondary</button>
								<a href className="cps-btn +primary +disabled">PRIMARY link</a>
								<a href className="cps-btn +secondary +disabled">secondary link</a>
								<button className="cps-btn +primary" disabled><span className="cps-icon cps-icon-upload"></span> primary</button>
								<a href className="cps-btn +primary" disabled>PRIMARY link <span className="cps-icon cps-icon-upload"></span></a>
							</div>
						</div>
					</div>
				</div>

				<Highlight className="html">
				{
`<button class="cps-btn +primary">primary</button>
<button class="cps-btn +secondary">secondary</button>
<a href class="cps-btn +primary">PRIMARY link</a>
<a href class="cps-btn +secondary">secondary link</a>
<button class="cps-btn +primary"><span class="cps-icon cps-icon-upload"></span> primary</button>
<a href class="cps-btn +primary">PRIMARY link <span class="cps-icon cps-icon-upload"></span></a>
`
				}
				</Highlight>

				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div className="cps-subheader-sm">Flat Buttons</div>
						<div className="cps-row">
							<div className="cps-col-xs-12">
								<span className="cps-link cps-primary-green"><strong>PRIMARY link</strong></span>
								<a href className="cps-link">PRIMARY link</a>
								<a href className="cps-link" disabled="disabled">PRIMARY link</a>
								<a href className="cps-link"><span className="cps-icon cps-icon-lg-check"></span> ACCEPT</a>
								<a href className="cps-link" disabled="disabled"><span className="cps-icon cps-icon-lg-check"></span> PRIMARY link</a>
							</div>
						</div>
					</div>
				</div>
								<Highlight className="html">
				{
`<a href class="cps-link">PRIMARY link</a>
<a href class="cps-link" disabled="disabled">PRIMARY link</a>
<a href class="cps-link"><span class="cps-icon cps-icon-lg-check"></span> ACCEPT</a>
<a href class="cps-link" disabled="disabled"><span class="cps-icon cps-icon-lg-check"></span> PRIMARY link</a>
`
				}
				</Highlight>


				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div className="cps-subheader-sm">Icon Button</div>
						<div className="cps-row">
							<div className="cps-col-xs-12">
								<div className="cps-btn-icon">
									<a href className="cps-link"><span className="cps-icon cps-icon-work"></span></a>
									<a href className="cps-link"><span className="cps-icon cps-icon-cog"></span></a>
									<a href className="cps-link"><span className="cps-icon cps-icon-close"></span></a>
									<a href className="cps-link"><span className="cps-icon cps-icon-help"></span></a>
									<a href className="cps-link"><span className="cps-icon cps-icon-lg-check"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>


								<Highlight className="html">
				{
`<div className="cps-btn-icon">
  <a href class="cps-link"><span class="cps-icon cps-icon-work"></span></a>
  <a href class="cps-link"><span class="cps-icon cps-icon-cog"></span></a>
</div>`
				}
				</Highlight>


				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__body">
						<div className="cps-subheader-sm">Links</div>
						<div className="cps-row cps-margin-top-16">
							<div className="cps-col-xs-12">
								<a href>this is a standard link</a>
							</div>
						</div>
					</div>
				</div>


								<Highlight className="html">
				{
`<a href>this is a standard link</a>`
				}
				</Highlight>
			</div>
			)
		}
})
