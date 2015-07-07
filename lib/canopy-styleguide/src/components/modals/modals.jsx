var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div style={{width: "100%", height: "350px"}} className="cps-flexible-focus cps-modal">
					<div className="cps-modal__screen" style={{position: "relative"}}></div>
					<div className="cps-modal__dialog cps-card" style={{position: "absolute", top: "200px"}}>
						<div className="cps-card__header cps-subheader-sm">
							Upload a File
							<a href className="cps-modal__dialog__close cps-icon cps-icon-close"></a>
						</div>
						<div className="cps-card__banner +large +bg-warning">
							 <i className="cps-icon cps-icon-error cps-warning"><span>This is a warning</span></i>
						</div>
						<div className="cps-card__body">
							Choose a file to upload to Canopy. You can upload asm any as you'd like&mdash; or if you're not a huge fan of
							clicking you can drag and drop your files anywhere on this page.
						</div>
						<div className="cps-modal__dialog__actions">
							<button className="cps-btn +primary">CHOOSE FILES</button>
							<a href="#" className="cps-link">NEVERMIND</a>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- The dialog markup should be appended to the BODY tag.  -->
<div class="cps-modal">
  <div class="cps-modal__screen"></div>
  <div class="cps-modal__dialog cps-card">
    <div class="cps-card__header cps-subheader-sm"><span>Upload a File</span>
      <a href="true" class="cps-modal__dialog__close cps-icon cps-icon-close"></a>
    </div>
    <div class="cps-card__banner +large +bg-warning"><i class="cps-icon cps-icon-error cps-warning"><span>This is a warning</span></i>
    </div>
			<div class="cps-card__body">Choose a file to upload to Canopy. You can upload asm any as you'd like— or
      if you're not a huge fan of clicking you can drag and drop your files anywhere
      on this page.</div>
    <div class="cps-modal__dialog__actions">
      <button class="cps-btn +primary">CHOOSE FILES</button><a href="#" class="cps-link">NEVERMIND</a>
    </div>
  </div>
</div>
`
				}
				</Highlight>
				<div style={{width: "100%", height: "350px", position: "relative"}} className="cps-flexible-focus cps-overlay-modal">
					<div className="cps-overlay-modal__content" style={{'padding-top': "50px"}}>
						<div className="cps-overlay-modal__content__header">
							Create a New Date
						</div>
						<div className="cps-overlay-modal__content__body">
							<form className="cps-form-horizontal">
								<div className="cps-form-group">
									<label for="exampleInputEmail1" className="cps-col-xs-2">Date Title</label>
									<div className="cps-col-xs-4">
										<input type="text" className="cps-form-control" placeholder="New Event"/>
									</div>
								</div>
								<div className="cps-form-group">
									<label for="exampleInputEmail1" className="cps-col-xs-2">Date</label>
									<div className="cps-col-xs-2">
										<input type="text" className="cps-form-control" placeholder="2/7/2015"/>
									</div>
									<div className="cps-col-xs-2">
										<input type="text" className="cps-form-control" placeholder="4:00 PM"/>
									</div>
									<label for="exampleInputEmail1" className="cps-col-xs-0">To</label>
									<div className="cps-col-xs-2">
										<input type="text" className="cps-form-control" placeholder="2/9/2015"/>
									</div>
									<div className="cps-col-xs-2">
										<input type="text" className="cps-form-control" placeholder="5:00 PM"/>
									</div>
								</div>
								<div className="cps-form-group">
									<label for="exampleInputEmail1" className="cps-col-xs-2">Description</label>
									<div className="cps-col-xs-6">
										<textarea className="cps-form-control +no-resize"></textarea>
									</div>
								</div>
								<div className="cps-form-group">
									<label for="exampleInputEmail1" className="cps-col-xs-2"></label>
									<div className="cps-col-xs-6">
										<button className="cps-btn +primary">ADD DATE</button>
										<a href="#" className="cps-link">CANCEL</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- The dialog markup should be appended to the BODY tag.  -->
<div class="cps-overlay-modal">
  <div class="cps-overlay-modal__content">
    <div class="cps-overlay-modal__content__header">
      Create a New Date
    </div>
    <div class="cps-overlay-modal__content__body">
      <form class="cps-form-horizontal">
        <div class="cps-form-group">
          <label for="exampleInputEmail1" class="cps-col-xs-2">Date Title</label>
          <div class="cps-col-xs-4">
            <input type="text" class="cps-form-control" placeholder="New Event"/>
          </div>
        </div>
        <div class="cps-form-group">
          <label for="exampleInputEmail1" class="cps-col-xs-2">Date</label>
          <div class="cps-col-xs-2">
            <input type="text" class="cps-form-control" placeholder="2/7/2015"/>
          </div>
          <div class="cps-col-xs-2">
            <input type="text" class="cps-form-control" placeholder="4:00 PM"/>
          </div>
          <label for="exampleInputEmail1" class="cps-col-xs-0">To</label>
          <div class="cps-col-xs-2">
            <input type="text" class="cps-form-control" placeholder="2/9/2015"/>
          </div>
          <div class="cps-col-xs-2">
            <input type="text" class="cps-form-control" placeholder="5:00 PM"/>
          </div>
        </div>
        <div class="cps-form-group">
          <label for="exampleInputEmail1" class="cps-col-xs-2">Description</label>
          <div class="cps-col-xs-6">
            <textarea></textarea>
          </div>
        </div>
        <div class="cps-form-group">
            <button class="cps-btn +primary">ADD DATE</button>
            <a href="#" class="cps-link">CANCEL</a>
        </div>
      </form>

    </div>
  </div>
</div>
`
				}
				</Highlight>
			</div>
		)
	}
});
