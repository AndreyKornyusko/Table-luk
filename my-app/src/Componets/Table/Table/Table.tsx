import React from 'react';
import './Table.css';
import Dropdown from '../BtnDropdown/BtnDropdown';

const Table = ({ items, handleChooseBtnClick }) => (
  <table className="table">
    <thead >
      <tr>
        <th >

        </th>
        <th >
          #
        </th>
        <th >
          Status
        </th>
        <th >
          State
        </th>
        <th >
          City
        </th>
        <th >
          Collage Name
        </th>
        <th >
          First Name
        </th>
        <th >
          Last Name
        </th>
        <th >
          Phone
        </th>
        <th >
          Collage email
        </th>
        <th >
          Training complited
        </th>
        <th >
          Complited Tours
        </th>
        <th >
          Upcoming Tours
        </th>
        <th >
          Canceled Tours
        </th>
        <th >
          Resheduled Tours
        </th>
        <th >
          Join date
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
            <td>
              <div>
                <Dropdown
                id={id}
                onChange={handleChooseBtnClick}
                />
                {/* <div
                  id={id}
                  className="table__choose-btn"
                  onClick={handleChooseBtnClick}
                >
                  <div className="table__choose-btn-img-wrap">
                    <div className="table__choose-btn-dot"></div>
                    <div className="table__choose-btn-dot"></div>
                    <div className="table__choose-btn-dot"></div>
                  </div>
                </div> */}
              </div>
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