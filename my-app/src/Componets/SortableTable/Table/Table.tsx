import React from 'react';
import './Table.css';
import Dropdown from '../BtnDropdown/BtnDropdown';


const Table = ({
  items,
  requestSort,
  // sortConfig ,
  handleChooseActionBtnClick,
}) => (
    <table className="table">
      <thead >
        <tr>
          <th >
          </th>
          <th >
            <div id="rowindex"
              data-id="rowindex"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="rowindex"
                className="table__head-title">#</div>
              <div data-id="rowindex" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="status"
              data-id="status"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="status" className="table__head-title">Status</div>
              <div data-id="status" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="state"
              data-id="state"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="state" className="table__head-title">State</div>
              <div data-id="state" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="city"
              data-id="city"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="city" className="table__head-title">City</div>
              <div data-id="city" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >

            <div id="collagename"
              data-id="collagename"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="collagename" className="table__head-title">Collage Name</div>
              <div data-id="collagename" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="firstname"
              data-id="firstname"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="firstname" className="table__head-title">First Name</div>
              <div data-id="firstname" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="lastname"
              data-id="lastname"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="lastname" className="table__head-title">Last Name</div>
              <div data-id="lastname" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="phone"
              data-id="phone"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="phone" className="table__head-title">Phone</div>
              <div data-id="phone" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="collageemail"
              data-id="collageemail"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="collageemail" className="table__head-title">Collage email</div>
              <div data-id="collageemail" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="trainingComplited"
              data-id="trainingComplited"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="trainingComplited" className="table__head-title">Training complited</div>
              <div data-id="trainingComplited" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="complitedTours"
              data-id="complitedTours"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="complitedTours" className="table__head-title">Complited Tours</div>
              <div data-id="complitedTours" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="upcomingTours"
              data-id="upcomingTours"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="upcomingTours" className="table__head-title">Upcoming Tours</div>
              <div data-id="upcomingTours" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="canceledTours"
              data-id="canceledTours"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="canceledTours" className="table__head-title">Canceled Tours</div>
              <div data-id="canceledTours" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="resheduledTours"
              data-id="resheduledTours"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="resheduledTours" className="table__head-title">Resheduled Tours</div>
              <div data-id="resheduledTours" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
          <th >
            <div id="joindate"
              data-id="joindate"
              className="table__head-btn"
              onClick={requestSort}>
              <div data-id="joindate" className="table__head-title">Join date</div>
              <div data-id="joindate" className="table__head-arrows">&#8593;&#8595;</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(({
          id,
          rowindex,
          status,
          state,
          city,
          collagename,
          firstname,
          lastname,
          phone,
          collageemail,
          trainingComplited,
          complitedTours,
          upcomingTours,
          canceledTours,
          resheduledTours,
          joindate

        }) => (
            <tr
              key={id + phone}
            >
              <td className="table__btn-td">
                <Dropdown
                  id={id}
                  onChange={handleChooseActionBtnClick}
                />
              </td>
              <td>{rowindex}</td>
              <td className="table__status-td">
                {status === 'Active' && <span className="table__active-td">{status}</span>}
                {status === 'Pending' && <span className="table__pending-td">{status}</span>}
                {status === 'Blocked' && <span className="table__blocked-td">{status}</span>}
              </td>
              <td>{state}</td>
              <td>{city}</td>
              <td>{collagename}</td>
              <td>{firstname}</td>
              <td>{lastname}</td>
              <td>{phone}</td>
              <td>{collageemail}</td>
              <td>{trainingComplited}</td>
              <td>{complitedTours}</td>
              <td>{upcomingTours}</td>
              <td>{canceledTours}</td>
              <td>{resheduledTours}</td>
              <td>{joindate}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );

export default Table;