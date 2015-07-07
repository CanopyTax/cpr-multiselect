var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Color Palette
				</div>
				<div className="cps-card__body cps-caption">
					<div className="cps-subheader-sm padding-bottom-20">Contextual Colors</div>
					<br/>
					<div className="left-md-space cps-margin-left-16">
						<div className="cps-row">
							<div className="cps-bg-warning cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-warning</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-warning">.cps-warning</div>
							<div className="cps-col-xs-2 cps-center-vertical">@warning</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-red cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-red</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-red">.cps-red</div>
							<div className="cps-col-xs-2 cps-center-vertical">@red</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-info cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-info</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-info">.cps-info</div>
							<div className="cps-col-xs-2 cps-center-vertical">@info</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-blue-link cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-blue-link</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-blue-link">.cps-blue-link</div>
							<div className="cps-col-xs-2 cps-center-vertical">@blue-link</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-general cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-general</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-general">.cps-general</div>
							<div className="cps-col-xs-2 cps-center-vertical">@general</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-success cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-success</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-success">.cps-success</div>
							<div className="cps-col-xs-2 cps-center-vertical">@success</div>
						</div>
					</div>
					<div className="cps-subheader-sm padding-bottom-20">Greens</div>
					<br/>
					<div className="left-md-space cps-margin-left-16">
						<div className="cps-row">
							<div className="cps-bg-dark-green cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-dark-green</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-dark-green">.cps-dark-green</div>
							<div className="cps-col-xs-2 cps-center-vertical">@dark-green</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-medium-green cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-medium-green</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-medium-green">.cps-medium-green</div>
							<div className="cps-col-xs-2 cps-center-vertical">@mediumedium-green</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-primary-green cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-primary-green</span><span className="cps-pull-left">PRIMARY</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-primary-green">.cps-primary-green</div>
							<div className="cps-col-xs-2 cps-center-vertical">@primary-green</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-light-green cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-light-green</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-light-green">.cps-light-green</div>
							<div className="cps-col-xs-2 cps-center-vertical">@light-green</div>
						</div>
					</div>
					<div className="cps-subheader-sm padding-bottom-20">Grayscales</div>
					<br/>
					<div className="left-md-space cps-margin-left-16">
						<div className="cps-row">
							<div className="cps-bg-dark-gray cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-dark-gray</span><span className="cps-pull-left">FONT COLOR</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-dark-gray">.cps-dark-gray</div>
							<div className="cps-col-xs-2 cps-center-vertical">@dark-gray</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-medium-gray cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-medium-gray</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-medium-gray">.cps-medium-gray</div>
							<div className="cps-col-xs-2 cps-center-vertical">@mediumedium-gray</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-light-gray cps-col-xs-2 cps-padding-8 cps-white cps-center-vertical"><span className="cps-pull-right">.cps-bg-light-gray</span><span className="cps-pull-left">ICONOGRAPHY</span>
							</div>
							<div className="cps-col-xs-2 cps-center-vertical cps-light-gray">.cps-light-gray</div>
							<div className="cps-col-xs-2 cps-center-vertical">@light-gray</div>
						</div>
					</div>
					<br/>
					<div className="left-md-space cps-margin-left-16">
						<div className="cps-row">
							<div className="cps-bg-white cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-white</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-1">.cps-white</div>
							<div className="cps-col-xs-2 cps-center-vertical">@white</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-1 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-1</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-1">.cps-gray-1</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray1</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-2 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-2</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-2">.cps-gray-2</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray2</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-3 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-3</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-3">.cps-gray-3</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray3</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-4 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-4</span><span className="cps-pull-left">HOVER</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-4">.cps-gray-4</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray4</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-5 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-5</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-5">.cps-gray-5</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray5</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-6 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-6</span><span className="cps-pull-left">BREAKLINES</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-6">.cps-gray-6</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray6</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-7 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-7</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-7">.cps-gray-7</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray7</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-8 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-8</span><span className="cps-pull-left">BREAKLINES</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-8">.cps-gray-8</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray8</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-9 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-9</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-9">.cps-gray-9</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray9</div>
						</div>
						<div className="cps-row">
							<div className="cps-bg-gray-10 cps-col-xs-2 cps-padding-8 cps-center-vertical"><span className="cps-pull-right">.cps-bg-gray-10</span>
							</div>
							<div className="cps-bg-light-gray cps-padding-8 cps-col-xs-2 cps-center-vertical cps-gray-10">.cps-gray-10</div>
							<div className="cps-col-xs-2 cps-center-vertical">@gray10</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
