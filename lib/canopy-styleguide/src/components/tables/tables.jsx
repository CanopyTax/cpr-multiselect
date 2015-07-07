var React = require('react');
var Highlight = require('react-highlight');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="cps-flexible-focus">
				<div className="cps-card">
					<div className="cps-card__body">
						<table className="cps-inset-table">
							<thead>
								<tr>
									<th>Date</th>
									<th>Transaction #</th>
									<th>Billed</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>02/03/15</td>
									<td>LK35JKL221DIIE</td>
									<td>$ 105.00</td>
								</tr>
								<tr>
									<td>02/03/15</td>
									<td>PJ22DNVZ7199</td>
									<td>$ 105.00</td>
								</tr>
								<tr>
									<td>02/03/15</td>
									<td>LK35JKL221DIIE</td>
									<td>$ 105.00</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<Highlight className="html">
				{
`<!-- Sometimes making an entire card a full table can be too heavy and not entirely relavent  -->
<!-- to the context of the rest of the card. For these situations we have created inset tables-->
<!-- If you need to specifically size columns use the bootstrap grid system.                  -->
<table class="cps-inset-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Transaction #</th>
      <th>Billed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>02/03/15</td>
      <td>LK35JKL221DIIE</td>
      <td>$ 105.00</td>
    </tr>
    <tr>
      <td>02/03/15</td>
      <td>PJ22DNVZ7199</td>
      <td>$ 105.00</td>
    </tr>
    <tr>
      <td>02/03/15</td>
      <td>LK35JKL221DIIE</td>
      <td>$ 105.00</td>
    </tr>
  </tbody>
</table>
`
				}
				</Highlight>
				<div className="cps-card-table cps-card">
					<table>
						<thead>
							<tr>
								<th>Filename</th>
								<th>Type</th>
								<th>Last Modified</th>
							</tr>
							<tr>
								<th colSpan="3"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>some_filename.pdf</td>
								<td>PDF</td>
								<td>Jan 21 <span className="cps-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr>
								<td>secondquarter-tracking.doc</td>
								<td>Document</td>
								<td>Jan 19 <span className="cps-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr>
								<td>client-list.docx</td>
								<td>Document</td>
								<td>Jan 02 <span className="cps-l-gray">Kurt Avarell</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<Highlight className="html">
				{
`<!-- Card table  -->
<div class="cps-card-table cps-card">
  <table>
    <thead>
      <tr>
        <th>Filename</th>
        <th>Type</th>
        <th>Last Modified</th>
      </tr>
      <tr>
        <th colspan="3"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>some_filename.pdf</td>
        <td>PDF</td>
        <td>Jan 21 <span class="cps-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr>
        <td>secondquarter-tracking.doc</td>
        <td>Document</td>
        <td>Jan 19 <span class="cps-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr>
        <td>client-list.docx</td>
        <td>Document</td>
        <td>Jan 02 <span class="cps-l-gray">Kurt Avarell</span></td>
      </tr>
    </tbody>
  </table>
</div>
`
				}
				</Highlight>

				<div className="cps-card-table cps-card">
					<div className="cps-card-table__headcontent">
						<div className="cps-card-table__actions">
							<div className="cps-card-table__actions__icons">
								<a className="cps-link"><i className="cps-icon cps-icon-download"></i></a>
								<a className="cps-link"><i className="cps-icon cps-icon-notes"></i></a>
								<a className="cps-link"><i className="cps-icon cps-icon-trash"></i></a>
								<a className="cps-link"><i className="cps-icon cps-icon-sort"></i></a>
							</div>
							<a href="#" className="cps-link">ADD A FILE</a>
						</div>
						<div className="cps-subheader">Files</div>
					</div>
					<table>
						<thead>
							<tr className="cps-card-table__thin">
								<th className="cps-card-table__select-column">
									<label className="cps-checkbox">
										<input type="checkbox" value="option1"/><span></span>
									</label>
								</th>
								<th>Filename</th>
								<th>Type</th>
								<th>Last Modified</th>
							</tr>
							<tr className="+thin">
								<th colSpan="3"></th>
							</tr>
						</thead>
						<tbody>
							<tr className="+active +hover">
								<td className="cps-card-table__select-column">
									<label className="cps-checkbox">
										<input type="checkbox" value="option1"/><span></span>
									</label>
								</td>
								<td>some_filename.pdf</td>
								<td>PDF</td>
								<td>Jan 21 <span className="cps-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr className="+hover">
								<td className="cps-card-table__select-column">
									<label className="cps-checkbox">
										<input type="checkbox" value="option1"/><span></span>
									</label>
								</td>
								<td>secondquarter-tracking.doc</td>
								<td>Document</td>
								<td>Jan 19 <span className="cps-l-gray">Kurt Avarell</span></td>
							</tr>
							<tr className="+hover">
								<td className="cps-card-table__select-column">
									<label className="cps-checkbox">
										<input type="checkbox" value="option1"/><span></span>
									</label>
								</td>
								<td>client-list.docx</td>
								<td>Document</td>
								<td>Jan 02 <span className="cps-l-gray">Kurt Avarell</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<Highlight className="html">
				{
`<!-- Card table with a header  -->
<div class="cps-card-table cps-card">
  <div class="cps-card-table__headcontent">
    <div class="cps-card-table__actions">
      <div class="cps-card-table__actions__icons">
        <a class="cps-link"><i class="cps-icon cps-icon-download"></i></a>
        <a class="cps-link"><i class="cps-icon cps-icon-notes"></i></a>
        <a class="cps-link"><i class="cps-icon cps-icon-trash"></i></a>
        <a class="cps-link"><i class="cps-icon cps-icon-sort"></i></a>
      </div>
      <a href="#" class="cps-link">ADD A FILE</a>
    </div>
    <div class="cps-subheader">Files</div>
  </div>
  <table>
    <thead>
      <tr class="cps-card-table__thin">
        <th class="cps-card-table__select-column">
          <label class="cps-checkbox">
            <input type="checkbox" value="option1"/><span></span>
          </label>
        </th>
        <th>Filename</th>
        <th>Type</th>
        <th>Last Modified</th>
      </tr>
      <tr class="+thin">
        <th colSpan="3"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="+active +hover">
        <td class="cps-card-table__select-column">
          <label class="cps-checkbox">
            <input type="checkbox" value="option1"/><span></span>
          </label>
        </td>
        <td>some_filename.pdf</td>
        <td>PDF</td>
        <td>Jan 21 <span class="cps-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr class="+hover">
        <td class="cps-card-table__select-column">
          <label class="cps-checkbox">
            <input type="checkbox" value="option1"/><span></span>
          </label>
        </td>
        <td>secondquarter-tracking.doc</td>
        <td>Document</td>
        <td>Jan 19 <span class="cps-l-gray">Kurt Avarell</span></td>
      </tr>
      <tr class="+hover">
        <td class="cps-card-table__select-column">
          <label class="cps-checkbox">
            <input type="checkbox" value="option1"/><span></span>
          </label>
        </td>
        <td>client-list.docx</td>
        <td>Document</td>
        <td>Jan 02 <span class="cps-l-gray">Kurt Avarell</span></td>
      </tr>
    </tbody>
  </table>
</div>
`
				}
				</Highlight>
			</div>
		);
	}
});
