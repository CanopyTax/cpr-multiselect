var React = require('react');
var Highlight = require('react-highlight');
module.exports = React.createClass({
	render: function() {
		return (
		      <div>
				<div className="cps-flexible-focus cps-card">
					<div className="cps-card__header cps-subheader">
						Top-aligned textarea (with resize handle)
					</div>
					<div className="cps-card__body">
						<div className="cps-row">
							<div className="cps-col-xs-12">
								<form>
									<div className="cps-form-group">
										<label for="exampleInputEmail1">Email address</label>
										<textarea className="cps-form-control"></textarea>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

								<Highlight className="html">
					{
`<form>
  <div class="cps-form-group">
    <label for="exampleInputEmail1">Email address</label>
    <textarea class="cps-form-control"></textarea>
  </div>
</form>`
					}
					</Highlight>



			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Right-aligned textarea (without resize handle)
				</div>
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-12">
							<form className="cps-form-horizontal">
								<div className="cps-form-group">
									<label for="exampleInputEmail1" className="cps-col-xs-2">Full Name</label>
									<div className="cps-col-xs-3">
										<textarea className="cps-form-control +no-resize"></textarea>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

					<Highlight className="html">
					{
`<form class="cps-form-horizontal">
  <div class="cps-form-group">
    <label for="exampleInputEmail1" class="cps-col-xs-2">Full Name</label>
    <div class="cps-col-xs-3">
      <textarea class="cps-form-control +no-resize"></textarea>
    </div>
  </div>
</form>`
					}
					</Highlight>
			</div>
		   )
	}
});
