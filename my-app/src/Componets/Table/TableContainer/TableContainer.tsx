import React, { useState, useEffect } from 'react';
import './TableContainer.css';
import Table from '../Table/Table';

const items = [
  {
    id: 101, status: "Active", state: "president", city: "New York", collageName: "Donald Trump", firstName: "Donald", lastName: "Trump", phone: "455-44-41", collageEmail: "trump@mail.com", trainingComplited: "1/6",
    complitedTours: 8, upcomingTours: "10", canceledTours: "10", resheduledTours: "10", joinDate: "10/12/2020"
  },
  {
    id: 102, status: "Pending", state: "great man", city: "Chicago", collageName: "Ilon Mask", firstName: "Ilon", lastName: "Mask", phone: "455-44-42", collageEmail: "Mask@mail.com", trainingComplited: "1/7",
    complitedTours: 12, upcomingTours: "11", canceledTours: "11", resheduledTours: "11", joinDate: "11/12/2021"
  },
  {
    id: 103, status: "Blocked", state: "ex president", city: "Vegas", collageName: "Barak Obama", firstName: "Barak", lastName: "Obama", phone: "455-44-43", collageEmail: "Obama@mail.com", trainingComplited: "1/8",
    complitedTours: 11, upcomingTours: "12", canceledTours: "12", resheduledTours: "12", joinDate: "12/12/2022"
  },
]

export default function TableContainer() {

  const [stateItems, setState] = useState(items);
  const [rowStatus, setRowStatus] = useState({ id: 1000065465665661654611, status: "" });

  useEffect(() => {

    const indexedStateItems = stateItems.map((item, index) => {
      item.index = index + 1
      return { id: item.id, status: item.status, rowIndex: index + 1 }
    });
    setState(indexedStateItems);

    const handledItems = stateItems.map(item => {
      if (item.id === rowStatus.id) {
        item.status = rowStatus.status;
      }


      return item
    });
    console.log("handledItems", handledItems)
    setState(handledItems);

    if (rowStatus.status === "Delete") {
      const updatedItems = stateItems.filter(item => item.id !== rowStatus.id);
      setState(updatedItems);
    }


  }, [rowStatus]);

  const handleChooseBtnClick = (val, id) => {
    const status = { id, status: val };
    console.log("status", status)

    setRowStatus(status)
  }


  const handleHeadBtnClickNumberCol = (e) => {
    console.log('taget data-id', e.target.dataset['id'])

    const itemsToSort = stateItems;
    console.log("itemsToSort", itemsToSort)

    const sortBy = (a, b) => a.complitedTours - b.complitedTours;
    const sortedItems=itemsToSort.sort(sortBy);
    console.log("sortedItems", sortedItems)
    const itemsAfterSort = sortedItems.reverse()
    console.log("itemsAfterSort", itemsAfterSort)
    setState(itemsAfterSort)

  }


  const handleHeadBtnClickTextCol = (e) => {
    console.log('taget data-id', e.target.dataset['id'])
  }

  const handleHeadBtnClickDateCol = (e) => {
    console.log('taget data-id', e.target.dataset['id'])
  }

  console.log("stateItems", stateItems)
  console.log("rowStatus", rowStatus)

  return (
    <div>
      <Table
        items={stateItems}
        handleChooseBtnClick={handleChooseBtnClick}
        handleHeadBtnClickNumberCol={handleHeadBtnClickNumberCol}
        handleHeadBtnClickTextCol={handleHeadBtnClickTextCol}
        handleHeadBtnClickDateCol={handleHeadBtnClickDateCol}

      />
    </div>
  )
}
