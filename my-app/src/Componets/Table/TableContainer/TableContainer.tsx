import React, { useState, useEffect } from 'react';
import './TableContainer.css';
import Table from '../Table/Table';

const items = [
  {
    id: 101, status: "Active", state: "president", city: "New York", collageName: "Donald Trump", firstName: "Donald", lastName: "Trump", phone: "455-44-41", collageEmail: "trump@mail.com", trainingComplited: "1/6",
    complitedTours: "10", upcomingTours: "10", canceledTours: "10", resheduledTours: "10", joinDate: "10/12/2020"
  },
  {
    id: 102, status: "Pending", state: "president", city: "New York", collageName: "Ilon Mask", firstName: "Ilon", lastName: "Mask", phone: "455-44-42", collageEmail: "trump@mail.com", trainingComplited: "1/6",
    complitedTours: "10", upcomingTours: "10", canceledTours: "10", resheduledTours: "10", joinDate: "10/12/2020"
  },
  {
    id: 103, status: "Blocked", state: "president", city: "New York", collageName: "Donald Trump", firstName: "Donald", lastName: "Trump", phone: "455-44-43", collageEmail: "trump@mail.com", trainingComplited: "1/6",
    complitedTours: "10", upcomingTours: "10", canceledTours: "10", resheduledTours: "10", joinDate: "10/12/2020"
  },
]

export default function TableContainer() {

  const [stateItems, setState] = useState(items);
  const [rowStatus, setRowStatus] = useState({id: 1000065465665661654611, status: ""});

  useEffect(() => {
    const handledItems = stateItems.map(item => {
      if (item.id === rowStatus.id) {
        item.status = rowStatus.status;
      }
      return item
    });

    console.log("handledItems", handledItems)
    setState(handledItems);
  }, [rowStatus]);

  const handleChooseBtnClick = (val, id) => {
    const status = { id, status: val };
    console.log("status", status)

    setRowStatus(status)
  }

  console.log("stateItems", stateItems)

  return (
    <div>
      <Table
        items={stateItems}
        handleChooseBtnClick={handleChooseBtnClick}
      />
    </div>
  )
}
