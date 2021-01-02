import React, { useState, useEffect } from 'react';
import './TableContainer.css';
import Table from '../Table/Table';

const tableItems = [
  {
    id: 101, status: "Active", state: "president", city: "New York", collagename: "Donald Trump", firstname: "Donald", lastname: "Trump", phone: "455-44-41", collageemail: "trump@mail.com", trainingComplited: 1 / 6,
    complitedTours: 8, upcomingTours: 10, canceledTours: 10, resheduledTours: 10, joindate: "Wed, 02 May 2013 08:00:00 GMT"
  },
  {
    id: 102, status: "Pending", state: "great man", city: "Chicago", collagename: "Ilon Mask", firstname: "Ilon", lastname: "Mask", phone: "455-44-42", collageemail: "Mask@mail.com", trainingComplited: 1 / 2,
    complitedTours: 12, upcomingTours: 7, canceledTours: 5, resheduledTours: 6, joindate: "Wed, 27 May 2014 08:00:00 GMT"
  },
  {
    id: 103, status: "Blocked", state: "ex president", city: "Vegas", collagename: "Barak Obama", firstname: "Barak", lastname: "Obama", phone: "455-44-43", collageemail: "Obama@mail.com", trainingComplited: 1 / 8,
    complitedTours: 11, upcomingTours: 14, canceledTours: 1, resheduledTours: 2, joindate: "Wed, 12 May 2011 08:00:00 GMT"
  },
  {
    id: 104, status: "Blocked", state: "ex president", city: "Vegas", collagename: "Barak Obama", firstname: "Barak", lastname: "Obama", phone: "455-44-44", collageemail: "Obama@mail.com", trainingComplited: 1 / 1,
    complitedTours: 3, upcomingTours: 12, canceledTours: 12, resheduledTours: 12, joindate: "Wed, 25 May 2013 08:00:00 GMT"
  },

]

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {

      if (sortConfig.key === "joindate") {
        sortableItems.sort((a, b) => {
          const nameA = (new Date(a[sortConfig.key])).getTime();
          const nameB = (new Date(b[sortConfig.key])).getTime();

          if (nameA < nameB) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (nameA > nameB) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
        return sortableItems;
      }

      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default function TableContainer() {

  const [stateItems, setState] = useState(tableItems);
  const [rowStatus, setRowStatus] = useState({ id: 1000065465665661654611, status: "" });

  const { items, requestSort, sortConfig } = useSortableData(stateItems);

  useEffect(() => {
    const indexedStateItems = stateItems.map((item, index) => {
      item.rowindex = Number(index + 1);
      return { id: item.id, status: item.status, rowindex: Number(index + 1) }
    });
    setState(indexedStateItems);
    // console.log("indexed stateItems", stateItems)
  }, []);

  useEffect(() => {
    const handledItems = stateItems.map(item => {
      if (item.id === rowStatus.id) {
        item.status = rowStatus.status;
      }
      return item
    });
    // console.log("handledItems", handledItems)
    setState(handledItems);

    if (rowStatus.status === "Delete") {
      const updatedItems = stateItems.filter(item => item.id !== rowStatus.id);
      setState(updatedItems);
    }
  }, [rowStatus]);

  const handleChooseBtnClick = (val, id) => {
    const status = { id, status: val };
    // console.log("status", status)
    setRowStatus(status)
  }

  // console.log("sortConfig", sortConfig)
  // console.log("stateItems", stateItems)
  // console.log("rowStatus", rowStatus)

  return (
    <div>
      <Table
        items={items}
        requestSort={(e) => requestSort(e.target.dataset['id'])}
        handleChooseBtnClick={handleChooseBtnClick}
      />
    </div>
  )
}
