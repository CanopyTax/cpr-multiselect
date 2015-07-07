var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
		<div>
			<div className="cps-flexible-focus cps-card ">
				<div className="cps-card__header cps-subheader">
					Menus
				</div>
			</div>
				<Highlight className="html ">
				{
`<div class="cps-dropdown cps-open">
  <a href class="cps-btn +primary">
   New <span class="cps-caret"></span>
  </a>
  <ul class="cps-dropdown-menu" role="menu">
    <li><a href>My Profile</a></li>
    <li><a href>Team Members</a></li>
    <li><a href>Company Profile</a></li>

    <li class="cps-divider"></li>
    <li><a>Help</a>
    </li>
    <li class="cps-divider"></li>
    <li><a href="/signout">Sign out</a>
    </li>
  </ul>
</div>`
				}
				</Highlight>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__body">
					<div className="cps-row">
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-open">
								<a href className="cps-btn +primary">
								 New <span className="cps-caret"></span>
								</a>
								<ul className="cps-dropdown-menu" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="cps-divider"></li>
									<li><a>Help</a>
									</li>
									<li className="cps-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-open">
								<div className="cps-btn-icon">
									<a href className="cps-link">
										<span className="cps-icon cps-icon-cog"></span>
									</a>
								</div>
								<ul className="cps-dropdown-menu" role="menu">
									<li><a href><i className="cps-icon cps-icon-add-person cps-dropdown-menu__icon"></i>Share</a></li>
									<li><a href><i className="cps-icon cps-icon-download cps-dropdown-menu__icon"></i>Download</a></li>
									<li><a href><i className="cps-icon cps-icon-notes cps-dropdown-menu__icon"></i>Rename</a></li>
									<li><a href><i className="cps-icon cps-icon-trash cps-dropdown-menu__icon"></i>Delete</a></li>

								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-pull-right cps-open">
								<div className="cps-btn-icon">
									<a href className="cps-link">
										<span className="cps-icon cps-icon-cog"></span>
									</a>
								</div>
								<ul className="cps-dropdown-menu cps-pull-right" role="menu">
									<li><a href><i className="cps-icon cps-icon-add-person cps-dropdown-menu__icon"></i>Share</a></li>
									<li><a href><i className="cps-icon cps-icon-download cps-dropdown-menu__icon"></i>Download</a></li>
									<li><a href><i className="cps-icon cps-icon-notes cps-dropdown-menu__icon"></i>Rename</a></li>
									<li><a href><i className="cps-icon cps-icon-trash cps-dropdown-menu__icon"></i>Delete</a></li>

								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown">
								<a href className="cps-link">
								 Settings <span className="cps-caret"></span>
								</a>
								<ul className="cps-dropdown-menu" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="cps-divider"></li>
									<li><a>Help</a>
									</li>
									<li className="cps-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-open">
								<a href className="cps-link">
									Settings <span className="cps-caret"></span>
								</a>
								<ul className="cps-dropdown-menu" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="cps-divider"></li>
									<li><a>Help</a>
									</li>
									<li className="cps-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="cps-col-xs-2">
							<div className="cps-dropdown cps-pull-right cps-open">
								<a href className="cps-link">
									Settings <span className="cps-caret"></span>
								</a>
								<ul className="cps-dropdown-menu cps-pull-right" role="menu">
									<li><a href>My Profile</a></li>
									<li><a href>Team Members</a></li>
									<li><a href>Company Profile</a></li>

									<li className="cps-divider"></li>
									<li><a>Help</a>
									</li>
									<li className="cps-divider"></li>
									<li><a href="/signout">Sign out</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
	}
});
