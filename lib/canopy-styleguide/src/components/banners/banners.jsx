var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="cps-flexible-focus">
				<div className="cps-card">
					<div className="cps-card__header cps-subheader">
						Toasters & Banners
					</div>
					<div className="cps-card__body">
						<div className="cps-toaster +general">
							<span className="cps-toaster__message">Error: Please contact support</span>
							<a href>RETRY</a>
						</div>
						<div className="cps-toaster +success">
							<span className="cps-toaster__message">Client updated successfully</span>
							<a href>UNDO</a>
						</div>
						<div className="cps-toaster +info">
							<span className="cps-toaster__message">this is working!</span>
						</div>
						<div className="cps-toaster +warning">
							<span className="cps-toaster__message">I really want to  see how well it does in this scenario</span>
							<a href>DISMISS</a>
						</div>
					</div>
				</div>
			</div>


				<Highlight className="html">
				{
`<div class="cps-toaster +general">
  <span class="cps-toaster__message">Error: Please contact support</span>
  <a href>RETRY</a>
</div>
<div class="cps-toaster +success">
  <span class="cps-toaster__message">Client updated successfully</span>
  <a href>UNDO</a>
</div>
<div class="cps-toaster +info">
  <span class="cps-toaster__message">this is working!</span>
</div>
<div class="cps-toaster +warning">
  <span class="cps-toaster__message">I really want to  see how well it does in this scenario</span>
  <a href>DISMISS</a>
</div>`
				}
				</Highlight>


			<div className="cps-banner-inline">
				<div className="cps-banner-inline__title">Welcome back!</div>
				<div className="cps-banner-inline__content">Here is my message to you!</div>
				<a href className="cps-banner-inline__action">Take Action</a>
			</div>

				<Highlight className="html">
				{
`<div class="cps-banner-inline">
 <div class="cps-banner-inline__title">Welcome back!</div>
 <div class="cps-banner-inline__content">Here is my message to you!</div>
 <a href class="cps-banner-inline__action">Take Action</a>
</div>`
				}
				</Highlight>


			<div className="cps-banner-global">
				<div className="cps-banner-global__content">
					Don't forget to add +tall-top to the secondary nav when using this banner. Also, remove the 3px cps-topnav__bar from the nav too! <a href className="cps-banner-global__action">Take Action</a>
				</div>
				<a href className="cps-pull-right"><i className="cps-icon cps-icon-close"></i></a>
			</div>

							<Highlight className="html">
				{
`<div class="cps-banner-global">
  <div class="cps-banner-global__content">
	Don't forget to add the class '+banner-top' to (i) cps-topnav-secondary, (ii) cps-nav-content, and (iii) cps-flexible-sidenav when using this banner. Also, remove the 3px cps-topnav__bar from the nav too! <a href class="cps-banner-global__action">Take Action</a>
  </div>
  <a href class="cps-pull-right"><i class="cps-icon cps-icon-close"></i></a>
</div>`
				}
				</Highlight>


			<div className="cps-flexible-focus cps-margin-top-16">
				<div className="cps-card">
					<div className="cps-card__body">
						*Don't forget to add the class '+banner-top' to (i) cps-topnav-secondary, (ii) cps-nav-content, and (iii) cps-flexible-sidenav when using the global banner. Also, remove the 3px cps-topnav__bar from the nav too! <a href class="cps-banner-global__action">Take Action</a>
					</div>
				</div>
			</div>

		</div>
		);
	}
});
