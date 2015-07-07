var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var components = require('./components.js');
var Highlight = require('react-highlight');
var _ = require('lodash');

var icons = _.map(require('canopy-iconography/.fontcustom-manifest.json').glyphs, function(icon, name) {
	return 'cps-icon-' + name;
});

var Sidebar = React.createClass({
  render: function () {
	    return (
				<div className="cps-flexible-sidenav +tall-top">
					<div className="cps-flexible-sidenav__menu">
					{components.map(function(component, i) {
						var classes = "cps-icon " + icons[i] + " cps-flexible-sidenav__menu__item__icon";
						if(component.link) {
							return <a className="cps-flexible-sidenav__menu__item" href={component.link}>
								<i className={classes}></i>
								<span className="cps-flexible-sidenav__menu__item__title">{component.title}</span>
							</a>
						} else {
							return <Link className="cps-flexible-sidenav__menu__item" activeClassName="+active" to="component" params={{title: component.title}}>
								<i className={classes}></i>
								<span className="cps-flexible-sidenav__menu__item__title">{component.title}</span>
							</Link>;
						}
					})}
					</div>
				</div>
			);
	  }
});

var App = React.createClass({
  mixins: [ Router.State ],

  render: function () {
	    var title = this.getParams().title;
	    return (
				<div>

					<div className="cps-topnav">
						<div className="cps-topnav__bar"></div>

						<div className="cps-topnav__content">
							<span className="cps-topnav__content__brand" href>
								<img src="canopy-logotype.svg" alt="Company Logo"/>
							</span>
							<ul className="cps-topnav__content__menu">
								<li><a href="#">Canopy Style Guide</a></li>
								<li><a ui-sref="calendar" className="+active">Calendar</a></li>
							</ul>
							<ul className="cps-topnav__content__menu cps-pull-right">
								<li className="cps-topnav__content__menu__form">
									<div client-search></div>
								</li>
								<li className="cps-dropdown" dropdown on-toggle="toggled(cps-open)">
									<a href className="cps-link" dropdown-toggle>
									 Mike Hewitt
									 <span className="cps-caret"></span>
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
								</li>
							</ul>
						</div>
					</div>
						<div className="cps-topnav-secondary">
							<div className="cps-topnav-secondary__content" >
								<ul className="cps-topnav-secondary__content__menu">
									<li>
										<a href>Mike Lewis</a>
										<i className="cps-icon cps-icon-right-caret"></i>
									</li>
									<li>
										<a href>Level 2</a>
										<i className="cps-icon cps-icon-right-caret"></i>
									</li>
									<li>
										<a href>Level 3</a>
										<i className="cps-icon cps-icon-right-caret"></i>
									</li>
								</ul>
								<ul className="cps-topnav-secondary__content__right-menu">
									<li>
										<div className="cps-label-square +medium">
											<div className="cps-center-vertical">AC</div>
										</div>
									</li>
									<li>
										<div className="cps-label-square +medium">
											<div className="cps-center-vertical">DV</div>
										</div>
									</li>
									<li>
										<div className="cps-label-square +medium +active">
											<div className="cps-center-vertical">KL</div>
										</div>
									</li>
									<li>
										<div className="cps-label-square__add">
											<div className="cps-center-vertical">+</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					<Sidebar/>
					<div className="cps-nav-content +tall-top">
						<RouteHandler/>
					</div>
				</div>
			);
	  }
});

var Component = React.createClass({
  mixins: [ Router.State ],

  render: function () {
	    var params = this.getParams();
	    var Component = components.filter(function(component) {
				return component.title === params.title;
			})[0].html;
	    return (
				<Component/>
			);
	  }
});

var Index = React.createClass({
  render: function () {
	    return (
				<div className="cps-nav-content">
					<p>Our Styleguide</p>
				</div>
			);
	  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index}/>
    <Route name="component" path=":title" handler={Component} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('styleguide'));
});
