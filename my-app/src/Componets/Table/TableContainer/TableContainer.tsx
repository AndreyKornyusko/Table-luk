import React, { useState, useEffect } from 'react';
import './TableContainer.css';
import Table from '../Table/Table';

const items = [
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

export default function TableContainer() {

  const [stateItems, setState] = useState(items);
  const [rowStatus, setRowStatus] = useState({ id: 1000065465665661654611, status: "" });
  const [sortNumberType, setSortNumberType] = useState('');
  const [sortTextType, setSortTextType] = useState('');
  const [sortDateType, setSortDateType] = useState('');


  useEffect(() => {
    const indexedStateItems = stateItems.map((item, index) => {
      item.rowindex = Number(index + 1);
      return { id: item.id, status: item.status, rowindex: Number(index + 1) }
    });
    setState(indexedStateItems);
    console.log("indexed stateItems", stateItems)
  }, []);


  useEffect(() => {
    console.log("sortTextType", sortTextType)

    const sortArray = type => {
      const sortProperty = type;
      const sorted = [...stateItems].sort(function (a, b) {
        const nameA = a[sortProperty.toLowerCase()];
        const nameB = b[sortProperty.toLowerCase()];
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      setState(sorted);
    };

    sortArray(sortTextType);
  }, [sortTextType]);


  useEffect(() => {
    console.log("sortDateType", sortDateType)

    const sortArray = type => {
      const sortProperty = type;
      const sorted = [...stateItems].sort(function (a, b) {
        const nameA = (new Date(a[sortProperty])).getTime();
        const nameB = (new Date(b[sortProperty])).getTime();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      setState(sorted);
    };

    sortArray(sortDateType);
  }, [sortDateType]);



  useEffect(() => {
    console.log("sortNumberType", sortNumberType)
    const sortArray = type => {
      const sortProperty = type;
      const sorted = [...stateItems].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setState(sorted);
    };
    sortArray(sortNumberType);
  }, [sortNumberType]);




  useEffect(() => {
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


  // const handleHeadBtnClickNumberCol = (e) => {
  //   if (e.target.dataset['id'] === "complitedTours") {
  //     const itemsToSort = stateItems;
  //     const compare = (a, b) => {
  //       return a.complitedTours - b.complitedTours
  //     }
  //     const sortedItems = itemsToSort.sort(compare);
  //     console.log("sortedItems", sortedItems)
  //     setState(sortedItems)
  //   }
  // }


  // const handleHeadBtnClickTextCol = (e) => {
  //   console.log('taget data-id', e.target.dataset['id'])
  // }

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
        handleHeadBtnClickNumberCol={(e) => setSortNumberType(e.target.dataset['id'])}
        handleHeadBtnClickTextCol={(e) => setSortTextType(e.target.dataset['id'])}
        handleHeadBtnClickDateCol={(e) => setSortDateType(e.target.dataset['id'])}
      />
    </div>
  )
}
