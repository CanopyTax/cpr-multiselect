var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Inputs
				</div>
				<div className="cps-card__body">
					<div className="cps-subheader-sm cps-margin-bottom-24">Top-aligned Inputs</div>
					<div className="cps-row">
						<div className="cps-col-xs-12">
							<form>
								<div className="cps-form-group">
									<label for="exampleInputEmail1">Full Name</label>
									<input type="text" className="cps-form-control" placeholder="Enter name"/>
								</div>
								<div className="cps-form-group cps-has-feedback">
									<label for="exampleInputEmail1">Email address</label>
									<div className="cps-row">
										<div className="cps-col-xs-5">
											<input type="text" className="cps-form-control" placeholder="Enter email"/>
											<span className="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
											<span className="cps-error-block">This error message is hidden unless cps-has-error is present</span>
											<span className="cps-help-block">Example help block</span>
										</div>
										<div className="cps-col-xs-6">
											<span className="cps-form-help-block"><a href className="cps-link cps-padding-left-4 cps-padding-right-4"><i className="cps-icon cps-icon-help cps-light-gray"></i> <span className="cps-info cps-padding-left-8">Need help?</span></a></span>
										</div>
									</div>
								</div>
								<div className="cps-form-group cps-has-error">

										<label for="exampleInputPassword1">Phone Number</label>
										<input type="text" className="cps-form-control" value="234-343-3434"/>
										<span className="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
										<span className="cps-error-block">This is an error!</span>

								</div>
								<div className="cps-form-group">
									<div className="cps-input-group">
									 	<span className="cps-input-group-addon cps-icon-addon" id="basic-addon1"><i className="cps-icon cps-icon-add-person"></i></span>
									 	<input type="text" className="cps-form-control" placeholder="Username" aria-describedby="basic-addon1"/>
									</div>
								</div>
								<div className="cps-form-group">
									<div className="cps-input-group">
									 	<input type="text" className="cps-form-control" placeholder="Username" aria-describedby="basic-addon1"/>
									 	<span className="cps-input-group-addon cps-icon-addon" id="basic-addon1"><i className="cps-icon cps-icon-add-person"></i></span>
									</div>
								</div>
								<div className="cps-form-group cps-has-error">
									<div className="cps-input-group">
									 	<span className="cps-input-group-addon" id="basic-addon1">#</span>
									 	<input type="text" className="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
									</div>
									<span className="cps-error-block">This is an error!</span>
								</div>
								<div className="cps-form-group cps-has-feedback">
									<div className="cps-input-group">
									 	<span className="cps-input-group-addon cps-icon-addon cps-bg-primary-green" id="basic-addon1"><i className="cps-icon cps-icon-lg-check cps-white"></i></span>
									 	<input type="text" className="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
									</div>
									<span className="cps-error-block">This is an error!</span>
								</div>
								<div className="cps-form-group cps-has-error">
									<div className="cps-input-group">
									 	<span className="cps-input-group-addon" id="basic-addon1">#</span>
									 	<input type="text" className="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
									</div>
									<span className="cps-error-block">This is an error!</span>
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
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="cps-form-control" placeholder="Enter name"/>
  </div>
  <div class="cps-form-group cps-has-feedback">
    <label for="exampleInputEmail1">Email address</label>
    <div class="cps-row">
      <div class="cps-col-xs-5">
        <input type="text" class="cps-form-control" placeholder="Enter email"/>
        <span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
        <span class="cps-error-block">This error message is hidden unless cps-has-error is present</span>
        <span class="cps-help-block">Example help block</span>
      </div>
      <div className="cps-col-xs-6">
        <span class="cps-form-help-block"><a href class="cps-link cps-padding-left-4 cps-padding-right-4"><i class="cps-icon cps-icon-help cps-light-gray"></i> <span class="cps-info cps-padding-left-8">Need help?</span></a></span>
      </div>
    </div>
  </div>
  <div class="cps-form-group cps-has-error">
      <label for="exampleInputPassword1">Phone Number</label>
      <input type="text" class="cps-form-control" value="234-343-3434"/>
      <span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
      <span class="cps-error-block">This is an error!</span>
  </div>
<div class="cps-form-group">
  <div class="cps-input-group">
    <span class="cps-input-group-addon cps-icon-addon" id="basic-addon1"><i class="cps-icon cps-icon-add-person"></i></span>
    <input type="text" class="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
  </div>
  <span class="cps-error-block">This is an error!</span>
</div>
<div class="cps-form-group cps-has-error">
  <div class="cps-input-group">
    <span class="cps-input-group-addon" id="basic-addon1">#</span>
    <input type="text" class="cps-form-control" placeholder="Serial Number" aria-describedby="basic-addon1"/>
  </div>
  <span class="cps-error-block">This is an error!</span>
</div>
  <div class="cps-form-group">
    <label for="exampleInputPassword1">Disabled</label>
    <input type="text" class="cps-form-control" value="234-343-3434" disabled="true"/>
  </div>
</form>`
				}
				</Highlight>

			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__body">
					<div className="cps-subheader-sm cps-margin-bottom-16 cps-margin-top-24">Right-aligned Inputs</div>
					<div className="cps-row">
						<div className="cps-col-xs-12">
							<form className="cps-form-horizontal">
								<div className="cps-form-group">
									<label for="exampleInputEmail1" className="cps-col-xs-2 cps-control-label">Full Name</label>
									<div className="cps-col-xs-3">
										<input type="text" className="cps-form-control" placeholder="Enter name"/>
									</div>
								</div>
								<div className="cps-form-group cps-has-feedback cps-has-error">
									<label for="exampleInputEmail1" className="cps-col-xs-2 cps-control-label">Email address</label>
									<div className="cps-col-xs-3">
										<input type="text" className="cps-form-control" placeholder="Enter email"/>
										<span className="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
										<span className="cps-error-block">This error message is hidden unless cps-has-error is present</span>
										<span className="cps-help-block">Example help block</span>
									</div>
								</div>
								<div className="cps-form-group cps-has-error">
									<label for="exampleInputPassword1" className="cps-col-xs-2 cps-control-label">Phone Number</label>
									<div className="cps-col-xs-6">
										<input type="text" className="cps-form-control" value="234-343-3434"/>
										<span className="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
										<span className="cps-error-block">This is an error!</span>
									</div>
								</div>
								<div className="cps-form-group">
									<label for="exampleInputPassword1" className="cps-col-xs-2 cps-control-label">Disabled</label>
									<div className="cps-col-xs-10">
										<input type="text" className="cps-form-control"value="234-343-3434" disabled="true"/>
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
      <input type="text" class="cps-form-control" placeholder="Enter name"/>
    </div>
  </div>
  <div class="cps-form-group cps-has-feedback cps-has-error">
    <label for="exampleInputEmail1" class="cps-col-xs-2">Email address</label>
    <div class="cps-col-xs-3">
      <input type="text" className="cps-form-control" placeholder="Enter email"/>
      <span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
      <span class="cps-error-block">This error message is hidden unless cps-has-error is present</span>
      <span class="cps-help-block">Example help block</span>
    </div>
  </div>
  <div class="cps-form-group cps-has-error">
    <label for="exampleInputPassword1" class="cps-col-xs-2">Phone Number</label>
    <div class="cps-col-xs-6">
      <input type="text" class="cps-form-control" value="234-343-3434"/>
      <span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
      <span class="cps-error-block">This is an error!</span>
    </div>
  </div>
  <div class="cps-form-group">
    <label for="exampleInputPassword1" class="cps-col-xs-2">Disabled</label>
    <div class="cps-col-xs-10">
      <input type="text" class="cps-form-control"value="234-343-3434" disabled="true"/>
    </div>
  </div>
</form>`
				}
				</Highlight>

			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__body">
					<div className="cps-subheader-sm cps-margin-bottom-24 cps-margin-top-24">Inline Form</div>
					<div className="cps-row cps-padding-bottom-16">
						<div className="cps-col-xs-12">
							<form className="cps-form-inline">
								<div className="cps-form-group cps-has-feedback">
									<label for="exampleInputName2">Email</label>
									<input type="text" className="cps-form-control" placeholder="Enter email"/>
									<span className="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
								</div>
								<div className="cps-form-group cps-has-error">
									<label for="exampleInputName2">Phone</label>
									<input type="text" className="cps-form-control" value="234-343-3434"/>
									<span className="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
								</div>
								<div className="cps-form-group">
									<input type="text" className="cps-form-control" value="234-343-3434" disabled="true"/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Highlight className="html">
{
`<form class="cps-form-inline">
  <div class="cps-form-group cps-has-feedback">
    <label for="exampleInputName2">Email</label>
    <input type="text" class="cps-form-control" placeholder="Enter email"/>
    <span class="cps-icon-client cps-form-control-feedback" aria-hidden="true"></span>
  </div>
  <div class="cps-form-group cps-has-error">
    <label for="exampleInputName2">Phone</label>
    <input type="text" class="cps-form-control" value="234-343-3434"/>
    <span class="cps-icon-error cps-form-control-feedback" aria-hidden="true"></span>
  </div>
  <div class="cps-form-group">
    <input type="text" class="cps-form-control" value="234-343-3434" disabled="true"/>
  </div>
</form>`
}
				</Highlight>


			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__body">
					<div className="cps-subheader-sm cps-margin-bottom-24 cps-margin-top-24">Auto sized Inputs -- Right Aligned</div>
					<div className="cps-row cps-padding-bottom-16">
						<div className="cps-col-xs-12">
							<form className="cps-form-horizontal">
								<div className="cps-form-group-resize">
									<label for="Email" className="cps-col-xs-2 cps-control-label">Phone</label>
									<div className="cps-col-xs-8">
										<input type="text" className="cps-form-control-resize" placeholder="Enter email"/>
									</div>
								</div>
								<div className="cps-form-group-resize">
									<label for="Email" className="cps-col-xs-2 cps-control-label">Email</label>
									<div className="cps-col-xs-8">
										<input type="text" className="cps-form-control-resize" placeholder="Enter email"/>
									</div>
								</div>
								<div className="cps-form-group-resize">
									<label for="Email" className="cps-col-xs-2 cps-control-label">Address 1</label>
									<div className="cps-col-xs-8">
										<input type="text" className="cps-form-control-resize" placeholder="Enter email"/>
									</div>
								</div>
								<div className="cps-form-group-resize cps-has-error">
									<label for="Email" className="cps-col-xs-2 cps-control-label">Adress 2</label>
									<div className="cps-col-xs-8">
										<input type="text" className="cps-form-control-resize" placeholder="Enter email" value="234-343-3434"/>
										<span className="cps-error-block">This is an error!</span>
									</div>
								</div>
								<div className="cps-form-group-resize">
									<label for="Phone" className="cps-col-xs-2 cps-control-label">Zip</label>
									<div className="cps-col-xs-4">
										<input type="text" className="cps-form-control-resize" value="234-343-3434" readonly="readonly"/>
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
<div class="cps-form-group-resize">
  <label for="Email" class="cps-col-xs-2">Address 1</label>
  <div class="cps-col-xs-8">
    <input type="text" class="cps-form-control-resize" placeholder="Enter email"/>
  </div>
</div>
<div className="cps-form-group-resize cps-has-error">
  <label for="Email" class="cps-col-xs-2">Adress 2</label>
  <div class="cps-col-xs-8">
    <input type="text" class="cps-form-control-resize" placeholder="Enter email" value="234-343-3434"/>
    <span class="cps-error-block">This is an error!</span>
  </div>
</div>
<div class="cps-form-group-resize">
  <label for="Phone" class="cps-col-xs-2">Zip</label>
  <div class="cps-col-xs-4">
    <input type="text" class="cps-form-control-resize" value="234-343-3434" readonly="readonly"/>
  </div>
</div>
</form>`
}
				</Highlight>

			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__body">
					<div className="cps-subheader-sm cps-margin-bottom-24 cps-margin-top-24">Auto sized Inputs -- Inline Form</div>

					<div className="cps-row cps-padding-bottom-16">
						<div className="cps-col-xs-12">
							<form className="cps-form-inline">
								<div className="cps-form-group-resize">
									<label for="Email" >Email</label>
									<input type="text" className="cps-form-control-resize" placeholder="Enter email" value="exi@gm.com"/>
								</div>
								<div className="cps-form-group-resize">
									<label for="Email" >Phone</label>
									<input type="text" className="cps-form-control-resize" placeholder="Enter email"/>
								</div>
								<div className="cps-form-group-resize">
									<input type="text" className="cps-form-control-resize cps-subheader" placeholder="Enter zip code" value="large font example"/>
								</div>
								<div className="cps-form-group-resize cps-has-error">
									<input type="text" className="cps-form-control-resize" placeholder="Error example"/>
									<span className="cps-error-block">This is an error</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<Highlight className="html">
{
`<form class="cps-form-inline">
  <div class="cps-form-group-resize">
    <label for="Email" >Phone</label>
    <input type="text" class="cps-form-control-resize" placeholder="Enter email"/>
  </div>
  <div class="cps-form-group-resize">
    <label for="Email" >Phone</label>
    <input type="text" class="cps-form-control-resize" placeholder="Enter email"/>
  </div>
  <div class="cps-form-group-resize">
    <input type="text" class="cps-form-control-resize cps-subheader" placeholder="Enter email"/>
  </div>
  <div class="cps-form-group-resize cps-has-error">
    <input type="text" class="cps-form-control-resize" placeholder="Error example"/>
    <span class="cps-error-block">This is an error</span>
  </div>
</form>`
}
				</Highlight>


		</div>
		)
	}
});
