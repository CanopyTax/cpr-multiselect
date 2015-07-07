var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="cps-flexible-focus">
				<div className="cps-card">
					<div className="cps-slat-lg">
						<div className="cps-slat-lg__badge">
							<div className="cps-slat-lg__badge__main">21</div>
							<div className="cps-slat-lg__badge__sub">Jan</div>
						</div>
						<div className="cps-slat-lg__content">
							<div className="cps-slat-lg__content__title">
								Date Title
							</div>
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
							tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
							prosciutto ham rump tail.
						</div>
						<div className="cps-slat-lg__actions">
							2:30PM - 3:30PM
						</div>
					</div>
					<div className="cps-slat-lg">
						<div className="cps-slat-lg__content">
							<div className="cps-slat-lg__content__title">
								Date Title
							</div>
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
							tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
							prosciutto ham rump tail.
						</div>
						<div className="cps-slat-lg__actions +hover-show">
							<span className="cps-link cps-primary-green"><strong>PRIMARY link</strong></span>
						</div>
					</div>
					<a className="cps-slat-lg">
						<div className="cps-slat-lg__badge">
							<div className="cps-slat-lg__badge__main">21</div>
							<div className="cps-slat-lg__badge__sub">Jan</div>
						</div>
						<div className="cps-slat-lg__content">
							<div className="cps-slat-lg__content__title">
								Date Title
							</div>
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
							tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
							prosciutto ham rump tail.
						</div>
						<div className="cps-slat-lg__actions +hover-show">
							<i className="cps-icon cps-icon-trash"></i>
							<i className="cps-icon cps-icon-archive cps-margin-left-24"></i>
						</div>
					</a>
				</div>

				<Highlight className="html">
				{
`<!-- Large slats have a max of two separate lines of slat content. The first line  -->
<!-- of slat content should be a title or primary description for the slat. The    -->
<!-- second line should be meta data directly related to the slat.                 -->
<div class="cps-slat-lg">
  <div class="cps-slat-lg__badge">
    <div class="cps-slat-lg__badge__main">21</div>
    <div class="cps-slat-lg__badge__sub">Jan</div>
  </div>
  <div class="cps-slat-lg__content">
    <div class="cps-slat-lg__content__title">Date Title</div>
    <span>Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin tri-tip turducken doner... </span>
  </div>
  <div class="cps-slat-lg__actions">2:30PM - 3:30PM</div>
</div>
`
				}
				</Highlight>

				<div className="cps-card">
					<a className="cps-slat">
						<div className="cps-slat__badge">
							<i className="cps-icon cps-subheader cps-icon-taxes"></i>
						</div>
						<div className="cps-slat__content">
							<div className="cps-slat__content__title">
								Filename
							</div>
							<div className="cps-slat__content__description">
								Document
							</div>
						</div>
						<div className="cps-slat__actions">
							2:30PM - 3:30PM
						</div>
					</a>
					<div className="cps-slat">
						<div className="cps-slat__content">
							<div className="cps-slat__content__title">
								Filename
							</div>
							<div className="cps-slat__content__description">
								Document
							</div>
						</div>
						<div className="cps-slat__actions">
							2:30PM - 3:30PM
						</div>
					</div>
					<div className="cps-slat">
						<div className="cps-slat__badge">
							<i className="cps-icon cps-subheader cps-icon-taxes"></i>
						</div>
						<div className="cps-slat__content">
							<div className="cps-slat__content__title">
								Filename
							</div>
							<div className="cps-slat__content__description">
								Document
							</div>
						</div>
						<div className="cps-slat__actions +hover-show">
							<i className="cps-icon cps-icon-trash"></i>
							<i className="cps-icon cps-icon-archive cps-margin-left-24"></i>
						</div>
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- Medium slats have a max of one line of slat content. There needs to be a title  -->
<!-- and an option for descriptions. The primary description should be listed        -->
<!-- directly after the title.                                                       -->
<div class="cps-slat">
  <div class="cps-slat__badge">
    <i class="cps-icon cps-subheader cps-icon-taxes"></i>
  </div>
  <div class="cps-slat__content">
    <div class="cps-slat__content__title">Filename</div>
    <div class="cps-slat__content__description">Document</div>
  </div>
  <div class="cps-slat__actions">2:30PM - 3:30PM</div>
</div>
`
				}
				</Highlight>

				<div className="cps-card">
					<div className="cps-slat +small">
						<div className="cps-slat__badge">
							<i className="cps-icon cps-subheader cps-icon-taxes"></i>
						</div>
						<div className="cps-slat__content">
							<div className="cps-slat__content__title">
								Filename
							</div>
							<div className="cps-slat__content__description">
								Document
							</div>
						</div>
						<div className="cps-slat__actions">
							2:30PM - 3:30PM
						</div>
					</div>
					<div className="cps-slat +small">
						<div className="cps-slat__content">
							<div className="cps-slat__content__title">
								Filename
							</div>
							<div className="cps-slat__content__description">
								Document
							</div>
						</div>
						<div className="cps-slat__actions">
							2:30PM - 3:30PM
						</div>
					</div>
					<a className="cps-slat +small">
						<div className="cps-slat__badge">
							<i className="cps-icon cps-subheader cps-icon-taxes"></i>
						</div>
						<div className="cps-slat__content">
							<div className="cps-slat__content__title">
								Filename
							</div>
							<div className="cps-slat__content__description">
								Document
							</div>
						</div>
						<div className="cps-slat__actions +hover-show">
							<i className="cps-icon cps-icon-trash"></i>
							<i className="cps-icon cps-icon-archive cps-margin-left-24"></i>
						</div>
					</a>
				</div>
				<Highlight className="html">
				{
`<!-- Crate a small slat by simply adding the class modifier +small to the medium slat -->
<div class="cps-slat +small">
  <div class="cps-slat__badge">
    <i class="cps-icon cps-subheader cps-icon-taxes"></i>
  </div>
  <div class="cps-slat__content">
    <div class="cps-slat__content__title">Filename</div>
    <div class="cps-slat__content__description">Document</div>
  </div>
  <div class="cps-slat__actions">2:30PM - 3:30PM</div>
</div>
`
				}
				</Highlight>

				<div className="cps-card">
					<div className="cps-card__header cps-subheader">
						This slat appears within a card.
					</div>
					<div className="cps-slat-lg">
						<div className="cps-slat-lg__badge">
							<div className="cps-slat-lg__badge__main">21</div>
							<div className="cps-slat-lg__badge__sub">Jan</div>
						</div>
						<div className="cps-slat-lg__content">
							<div className="cps-slat-lg__content__title">
								Date Title
							</div>
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
							tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
							prosciutto ham rump tail.
						</div>
						<div className="cps-slat-lg__actions">
							2:30PM - 3:30PM
						</div>
					</div>
					<div className="cps-slat-lg">
						<div className="cps-slat-lg__badge">
							<div className="cps-slat-lg__badge__main">21</div>
							<div className="cps-slat-lg__badge__sub">Jan</div>
						</div>
						<div className="cps-slat-lg__content">
							<div className="cps-slat-lg__content__title">
								Date Title
							</div>
							Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
							tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
							prosciutto ham rump tail.
						</div>
						<div className="cps-slat-lg__actions">
							2:30PM - 3:30PM
						</div>
					</div>
				</div>
				<Highlight className="html">
					{
`<div class="cps-card">
  <div class="cps-card__header cps-subheader">
    This slat appears within a card.
  </div>
  <div class="cps-slat-lg">
    <div class="cps-slat-lg__badge">
      <div class="cps-slat-lg__badge__main">21</div>
      <div class="cps-slat-lg__badge__sub">Jan</div>
    </div>
    <div class="cps-slat-lg__content">
      <div class="cps-slat-lg__content__title">
        Date Title
      </div>
      Salami venison spare ribs shankle landjaeger tongue, pork loin brisket sirloin
      tri-tip turducken doner pork t-bone. Porchetta landjaeger chicken, kielbasa frankfurter
      prosciutto ham rump tail.
    </div>
    <div class="cps-slat-lg__actions">
      2:30PM - 3:30PM
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
