var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (

		<div>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Checkboxes and Radios
				</div>
				<div className="cps-card__body">
					<p>
						Note that the radio and checkboxes need to be wrapped inside a label. <strong>This is a requirement.</strong>
						The text beside the input also needs to be wrapped in a span tag.
					</p>
					<div className="cps-row">
						<div className="cps-col-xs-12">
							<form>
								<label className="cps-radio">
									<input type="radio" value="1" name="testQuestion"/><span>Yes</span>
								</label>
								<label className="cps-radio">
									<input type="radio" value="3" name="testQuestion"/><span>No</span>
								</label>
							</form>
						</div>
					</div>
					<div className="cps-row">
						<div className="cps-col-xs-12">
							<form>
								<label className="cps-radio">
									<input type="radio" value="1" checked disabled name="testQuestion"/>Yes
								</label>
								<label className="cps-radio">
									<input type="radio" value="3" disabled name="testQuestion"/>No
								</label>
							</form>
						</div>
					</div>
				</div>
			</div>
<Highlight className="html">
{`<form>
  <label class="cps-radio">
    <input type="radio" value="1" name="testQuestion"/><span>Yes</span>
  </label>
  <label class="cps-radio">
    <input type="radio" value="3" name="testQuestion"/><span>No</span>
  </label>
</form>`
}
</Highlight>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__body">
					<div className="cps-row margin-top-16">
						<div className="cps-col-xs-12">
							<form>
								<label className="cps-checkbox">
									<input type="checkbox" value="option1"/><span>1</span>
								</label>
								<label className="cps-checkbox">
									<input type="checkbox" value="option1" disabled/><span>1</span>
								</label>
								<label className="cps-checkbox">
									<input type="checkbox" value="option2" disabled checked/><span>2</span>
								</label>
							</form>
						</div>
					</div>
					<div className="cps-row cps-margin-top-16">
						<div className="cps-col-xs-12">
							<form>
								<label className="cps-checkbox-large">
									<input type="checkbox" value="option1"/><span>1</span>
								</label>
								<label className="cps-checkbox-large">
									<input type="checkbox" value="option1" disabled/><span>2</span>
								</label>
								<label className="cps-checkbox-large">
									<input type="checkbox" value="option2" disabled checked/><span>3</span>
								</label>
								<label className="cps-checkbox-large">
									<input type="checkbox" value="option2"/><span></span>
								</label>
							</form>
						</div>
					</div>
				</div>
			</div>
<Highlight className="html">
{
`<form>
  <label class="cps-checkbox">
    <input type="checkbox" value="option1"/><span>1</span>
  </label>
  <label class="cps-checkbox">
    <input type="checkbox" value="option1" disabled/><span>1</span>
  </label>
  <label class="cps-checkbox">
    <input type="checkbox" value="option2" disabled checked/><span>2</span>
  </label>
</form>`
}
</Highlight>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader-sm">Stacked checkboxes and radios</div>
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-12">
							<form>
								<div>
									<label className="cps-radio">
										<input type="radio" name="optionsRadios" value="option1"/><span>Option one is this and that&mdash;be sure to include why it's great</span>
									</label>
								</div>
								<div>
									<label className="cps-radio">
										<input type="radio" name="optionsRadios" value="option1"/><span>Option two is this and that&mdash;be sure to include why it's great</span>
									</label>
								</div>
								<div>
									<label className="cps-radio">
										<input type="radio" name="optionsRadios" value="option1"/><span>Option one is this and that&mdash;be sure to include why it's great</span>
									</label>
								</div>
							</form>
						</div>
					</div>
					<div className="cps-row">
						<div className="cps-col-xs-12">
							<form>
								<div>
									<label className="cps-checkbox">
										<input type="checkbox"/><span>Check me out</span>
									</label>
								</div>
								<div>
									<label className="cps-checkbox">
										<input type="checkbox"/><span>Check me out</span>
									</label>
								</div>
								<div>
									<label className="cps-checkbox">
										<input type="checkbox"/><span>Check me out</span>
									</label>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
<Highlight className="html">
{
`<form>
  <div class="cps-radio">
    <label>
      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/><span>Option one is this and that&mdash;be sure to include why it's great</span>
    </label>
  </div>
  <div class="cps-checkbox">
    <label>
      <input type="checkbox"/><span>Check me out</span>
    </label>
  </div>
</form>`
}
</Highlight>

			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader-sm">Toggle Switch</div>
				<div className="cps-card__body">
					<p>
						Toggles should be used for single instance values that need an "on" or "off" state.
						It's also importatnt to note that the toggle only has one disabled state. When a toggle is disabled
						within the application, then the value must be set to "off".
					</p>
					<div className="cps-row">
						<form>
							<label className="cps-toggle">
								<input type="checkbox" value="option1"/><span></span>
							</label>
							<label className="cps-toggle">
								<input type="checkbox" value="option1" disabled/><span></span>
							</label>
							<label className="cps-toggle">
								<input type="checkbox" value="option1" disabled checked/><span></span>
							</label>
						</form>
					</div>
				</div>
			</div>
			<Highlight className="html">
{`<form>
  <label class="cps-toggle">
    <input type="checkbox" value="option1"/><span></span>
  </label>
  <label class="cps-toggle">
    <input type="checkbox" value="option1" disabled/><span></span>
  </label>
  <label class="cps-toggle">
    <input type="checkbox" value="option1" disabled checked/><span></span>
  </label>
</form>
`}
		</Highlight>
		</div>
		)
	}
});
