var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
			<div className="cps-flexible-focus cps-card">
				<div className="cps-card__header cps-subheader">
					Date Pickers
				</div>
				<div className="cps-card__body">
					<p>
						The styleguide provides some override styles for the bootstrap date picker. Generate a datepicker as usuall with
						bootstrap and make sure that the id "cps-app" is on the body tag. The date picker should automatically style correctly.
					</p>
					<div className="datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-top"
					style={{position: 'relative', display: 'block', float: 'none'}}>
						<div className="datepicker-days" style={{display: 'block'}}>
							<table className=" table-condensed">
								<thead>
									<tr>
										<th className="prev">«</th>
										<th colSpan="5" className="datepicker-switch">March 2015</th>
										<th className="next">»</th>
									</tr>
									<tr>
										<th className="dow">S</th>
										<th className="dow">M</th>
										<th className="dow">T</th>
										<th className="dow">W</th>
										<th className="dow">T</th>
										<th className="dow">F</th>
										<th className="dow">S</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="old day">22</td>
										<td className="old day">23</td>
										<td className="old day">24</td>
										<td className="old day">25</td>
										<td className="old day">26</td>
										<td className="old day">27</td>
										<td className="old day">28</td>
									</tr>
									<tr>
										<td className="day">1</td>
										<td className="day">2</td>
										<td className="day">3</td>
										<td className="day">4</td>
										<td className="day">5</td>
										<td className="day">6</td>
										<td className="day">7</td>
									</tr>
									<tr>
										<td className="day">8</td>
										<td className="day">9</td>
										<td className="day">10</td>
										<td className="day">11</td>
										<td className="day">12</td>
										<td className="day">13</td>
										<td className="day">14</td>
									</tr>
									<tr>
										<td className="day">15</td>
										<td className="active day">16</td>
										<td className="day">17</td>
										<td className="day">18</td>
										<td className="day">19</td>
										<td className="day">20</td>
										<td className="day">21</td>
									</tr>
									<tr>
										<td className="day">22</td>
										<td className="day">23</td>
										<td className="day">24</td>
										<td className="day">25</td>
										<td className="day">26</td>
										<td className="day">27</td>
										<td className="day">28</td>
									</tr>
									<tr>
										<td className="day">29</td>
										<td className="day">30</td>
										<td className="day">31</td>
										<td className="new day">1</td>
										<td className="new day">2</td>
										<td className="new day">3</td>
										<td className="new day">4</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<th colSpan="7" className="today" style={{display: 'none'}}>Today</th>
									</tr>
									<tr>
										<th colSpan="7" className="clear" style={{display: 'none'}}>Clear</th>
									</tr>
								</tfoot>
							</table>
						</div>
						<div className="datepicker-months" style={{display: 'none'}}>
							<table className="table-condensed">
								<thead>
									<tr>
										<th className="prev">«</th>
										<th colSpan="5" className="datepicker-switch">2015</th>
										<th className="next">»</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colSpan="7"><span className="month">Jan</span><span className="month">Feb</span><span className="month active">Mar</span>
											<span
											className="month">Apr</span><span className="month">May</span><span className="month">Jun</span>
												<span
												className="month">Jul</span><span className="month">Aug</span><span className="month">Sep</span>
													<span
													className="month">Oct</span><span className="month">Nov</span><span className="month">Dec</span>
										</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<th colSpan="7" className="today" style={{display: 'none'}}>Today</th>
									</tr>
									<tr>
										<th colSpan="7" className="clear" style={{display: 'none'}}>Clear</th>
									</tr>
								</tfoot>
							</table>
						</div>
						<div className="datepicker-years" style={{display: 'none'}}>
							<table className="table-condensed">
								<thead>
									<tr>
										<th className="prev">«</th>
										<th colSpan="5" className="datepicker-switch">2010-2019</th>
										<th className="next">»</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colSpan="7"><span className="year old">2009</span><span className="year">2010</span><span className="year">2011</span>
											<span
											className="year">2012</span><span className="year">2013</span><span className="year">2014</span>
												<span
												className="year active">2015</span><span className="year">2016</span><span className="year">2017</span>
													<span
													className="year">2018</span><span className="year">2019</span><span className="year new">2020</span>
										</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<th colSpan="7" className="today" style={{display: 'none'}}>Today</th>
									</tr>
									<tr>
										<th colSpan="7" className="clear" style={{display: 'none'}}>Clear</th>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className="cps-flexible-focus cps-card cps-margin-top-24">
				<div className="cps-card__header cps-subheader">
					People Picker / Multi-select
				</div>
				<div className="cps-card__body">
					The mutli-selector widget is located in a <a href="http://canopytax.github.io/cp-multi-selector/">separate repository</a>.
				</div>
			</div>
		</div>
		)
	}
});
