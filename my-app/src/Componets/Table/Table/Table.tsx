import React from 'react';
import './Table.css';
import Dropdown from '../BtnDropdown/BtnDropdown';

// {
//   id: 101, status: "Active", state: "president", city: "New York", collageName: "Donald Trump",
//    firstName: "Donald", lastName: "Trump", phone: "455-44-41", collageEmail: "trump@mail.com",
//     trainingComplited: "1/6",
//   complitedTours: "10", upcomingTours: "10", canceledTours: "10", resheduledTours: "10",
//    joinDate: "10/12/2020"
// },


const Table = ({
  items,
  handleChooseBtnClick,
  handleHeadBtnClickNumberCol,
  handleHeadBtnClickTextCol,
  handleHeadBtnClickDateCol
}) => (
    <table className="table">
      <thead >
        <tr>
          <th >
          </th>
          <th >
            <div id="rowIndex"
              data-id="rowIndex"
              className="table__head-btn"
              onClick={handleHeadBtnClickNumberCol}>
              <div data-id="rowIndex"
                className="table__head-title">#</div>
            </div>
          </th>
          <th >
            <div id="status"
              data-id="status"
              className="table__head-btn"
              onClick={handleHeadBtnClickTextCol}>
              <div data-id="status" className="table__head-title">Status</div>
            </div>
          </th>
          <th >
            <div id="state" data-id="state" className="table__head-btn"
              onClick={handleHeadBtnClickTextCol}>
              <div data-id="state" className="table__head-title">State</div>
            </div>
          </th>
          <th >
            <div id="city"
              data-id="city"
              className="table__head-btn"
              onClick={handleHeadBtnClickTextCol}>
              <div data-id="city" className="table__head-title">City</div>
            </div>
          </th>
          <th >
            <div id="collageName"
              data-id="collageName"
              className="table__head-btn"
              onClick={handleHeadBtnClickTextCol}>
              <div data-id="collageName" className="table__head-title">Collage Name</div>
            </div>
          </th>
          <th >
            <div id="firstName"
              data-id="firstName"
              className="table__head-btn"
              onClick={handleHeadBtnClickTextCol}>
              <div data-id="firstName" className="table__head-title">First Name</div>
            </div>
          </th>
          <th >
            <div id="lastName"
              data-id="lastName"
              className="table__head-btn"
              onClick={handleHeadBtnClickTextCol}>
              <div data-id="lastName" className="table__head-title">Last Name</div>
            </div>
          </th>
          <th >
            <div id="phone"
              data-id="phone"
              className="table__head-btn"
              onClick={handleHeadBtnClickNumberCol}>
              <div data-id="phone" className="table__head-title">Phone</div>
            </div>
          </th>
          <th >
            <div id="collageEmail"
              data-id="phocollageEmailne"
              className="table__head-btn"
              onClick={handleHeadBtnClickTextCol}>
              <div data-id="collageEmail" className="table__head-title">Collage email</div>
            </div>
          </th>
          <th >
            <div id="trainingComplited"
              data-id="trainingComplited"
              className="table__head-btn"
              onClick={handleHeadBtnClickNumberCol}>
              <div data-id="trainingComplited" className="table__head-title">Training complited</div>
            </div>
          </th>
          <th >
            <div id="complitedTours"
              data-id="complitedTours"
              className="table__head-btn"
              onClick={handleHeadBtnClickNumberCol}>
              <div data-id="complitedTours" className="table__head-title">Complited Tours</div>
            </div>
          </th>
          <th >
            <div id="upcomingTours"
              data-id="upcomingTours"
              className="table__head-btn"
              onClick={handleHeadBtnClickNumberCol}>
              <div data-id="upcomingTours" className="table__head-title">Upcoming Tours</div>
            </div>
          </th>
          <th >
            <div id="canceledTours"
              data-id="canceledTours"
              className="table__head-btn"
              onClick={handleHeadBtnClickNumberCol}>
              <div data-id="canceledTours" className="table__head-title">Canceled Tours</div>
            </div>
          </th>
          <th >
            <div id="resheduledTours"
              data-id="resheduledTours"
              className="table__head-btn"
              onClick={handleHeadBtnClickNumberCol}>
              <div data-id="resheduledTours" className="table__head-title">Resheduled Tours</div>
            </div>
          </th>
          <th >
            <div id="joinDate"
              data-id="joinDate"
              className="table__head-btn"
              onClick={handleHeadBtnClickDateCol}>
              <div data-id="joinDate" className="table__head-title">Join date</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(({
          id,
          status,
          state,
          city,
          collageName,
          firstName,
          lastName,
          phone,
          collageEmail,
          trainingComplited,
          complitedTours,
          upcomingTours,
          canceledTours,
          resheduledTours,
          joinDate

        }, index) => (
            <tr
              key={id + phone}
            >
              <td className="table__btn-td">
                <Dropdown
                  id={id}
                  onChange={handleChooseBtnClick}
                />
              </td>
              <td>{index + 1}</td>
              <td className="table__status-td">
                {status === 'Active' && <span className="table__active-td">{status}</span>}
                {status === 'Pending' && <span className="table__pending-td">{status}</span>}
                {status === 'Blocked' && <span className="table__blocked-td">{status}</span>}

              </td>
              <td>{state}</td>
              <td>{city}</td>
              <td>{collageName}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{phone}</td>
              <td>{collageEmail}</td>
              <td>{trainingComplited}</td>
              <td>{complitedTours}</td>
              <td>{upcomingTours}</td>
              <td>{canceledTours}</td>
              <td>{resheduledTours}</td>
              <td>{joinDate}</td>

            </tr>
          ))}
      </tbody>
    </table>
  );

export default Table;