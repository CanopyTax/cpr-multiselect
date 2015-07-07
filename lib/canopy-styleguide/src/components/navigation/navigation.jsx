var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div style={{float:'right', "width": "calc(100% - 300px)"}}>
					<Highlight className="html">
						{
`
<div class="cps-secondarynav">
  <div class="cps-secondarynav__title">
    Some Title
  </div>
  <div class="cps-secondarynav__menu">
    <a href="#" class="cps-secondarynav__menu__item +expanded">
      <div class="cps-secondarynav__menu__item__bar"></div>
      <i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-compass"></i>
      <span class="cps-secondarynav__menu__item__title">Planning</span>
      <i class="cps-icon cps-icon-left-caret"></i>
    </a>
    <div class="cps-secondarynav__menu__sub +active">
      <a href="#" class="+active"><span>Power of Attorney</span></a>
      <a href="#"><span>Collection Survey</span></a>
    </div>
    <a href="#" class="cps-secondarynav__menu__item +expanded">
      <div class="cps-secondarynav__menu__item__bar"></div>
      <i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-work"></i>
      <span class="cps-secondarynav__menu__item__title">Program</span>
      <i class="cps-icon cps-icon-left-caret"></i>
    </a>
    <div class="cps-secondarynav__menu__sub +active">
      <a href="#"><span>Offer in Compromise</span></a>
      <a href="#"><span>Payment Plan</span></a>
      <a href="#"><span>Currently Not Collectible</span></a>
    </div>
    <a href="#" class="cps-secondarynav__menu__item">
      <div class="cps-secondarynav__menu__item__bar"></div>
      <i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-taxes"></i>
      <span class="cps-secondarynav__menu__item__title">File & Complete</span>
    </a>
    <a href="#" class="cps-secondarynav__menu__item +active">
      <div class="cps-secondarynav__menu__item__bar"></div>
      <i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-work"></i>
      <span class="cps-secondarynav__menu__item__title">Lock & Archive</span>
    </a>
    <a class="cps-secondarynav__menu__item +anchor-bottom">
      <i class="cps-secondarynav__menu__item__icon cps-icon cps-icon-cog"></i>
      <span class="cps-secondarynav__menu__item__title">Engagement Settings</span>
    </a>
  </div>
</div>
`
						}
					</Highlight>
				</div>
				<div className="cps-secondarynav" style={{position: "relative", height: "500px", float: "left"}}>
					<div className="cps-secondarynav__title">
						Some Title
					</div>
					<div className="cps-secondarynav__menu">
						<a href="#" className="cps-secondarynav__menu__item +expanded">
							<div className="cps-secondarynav__menu__item__bar"></div>
							<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-compass"></i>
							<span className="cps-secondarynav__menu__item__title">Planning</span>
							<i className="cps-icon cps-icon-left-caret"></i>
						</a>
						<div className="cps-secondarynav__menu__sub +active">
							<a href="#" className="+active"><span>Power of Attorney</span></a>
							<a href="#"><span>Collection Survey</span></a>
						</div>
						<a href="#" className="cps-secondarynav__menu__item">
							<div className="cps-secondarynav__menu__item__bar"></div>
							<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-work"></i>
							<span className="cps-secondarynav__menu__item__title">Program</span>
							<i className="cps-icon cps-icon-left-caret"></i>
						</a>
						<div className="cps-secondarynav__menu__sub">
							<a href="#"><span>Offer in Compromise</span></a>
							<a href="#"><span>Payment Plan</span></a>
							<a href="#"><span>Currently Not Collectible</span></a>
						</div>
						<a href="#" className="cps-secondarynav__menu__item">
							<div className="cps-secondarynav__menu__item__bar"></div>
							<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-taxes"></i>
							<span className="cps-secondarynav__menu__item__title">File & Complete</span>
						</a>
						<a href="#" className="cps-secondarynav__menu__item +active">
							<div className="cps-secondarynav__menu__item__bar"></div>
							<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-work"></i>
							<span className="cps-secondarynav__menu__item__title">Lock & Archive</span>
						</a>
						<a className="cps-secondarynav__menu__item +anchor-bottom">
							<i className="cps-secondarynav__menu__item__icon cps-icon cps-icon-cog"></i>
							<span className="cps-secondarynav__menu__item__title">Engagement Settings</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
});
