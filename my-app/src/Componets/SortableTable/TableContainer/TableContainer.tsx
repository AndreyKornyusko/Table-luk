import React, { useState, useEffect } from 'react';
import './TableContainer.css';
import Table from '../Table/Table';
import Modal from '../Modal/Modal';
import * as API from '../../../servises/api';

// const tableItems = [
//   {
//     id: 101, status: "Active", state: "ex president", city: "New York", collagename: "Donald Trump", firstname: "Donald", lastname: "Trump", phone: "455-44-41", collageemail: "trump@mail.com", trainingComplited: 1 / 6,
//     complitedTours: 8, upcomingTours: 10, canceledTours: 10, resheduledTours: 10, joindate: "Wed, 02 May 2013 08:00:00 GMT"
//   },
//   {
//     id: 102, status: "Pending", state: "great man", city: "Chicago", collagename: "Ilon Mask", firstname: "Ilon", lastname: "Mask", phone: "455-44-42", collageemail: "Mask@mail.com", trainingComplited: 1 / 2,
//     complitedTours: 12, upcomingTours: 7, canceledTours: 5, resheduledTours: 6, joindate: "Wed, 27 May 2014 08:00:00 GMT"
//   },
//   {
//     id: 103, status: "Blocked", state: "businessman", city: "Vegas", collagename: "Bill Gates", firstname: "Bill", lastname: "Gates", phone: "455-44-43", collageemail: "Gates@mail.com", trainingComplited: 1 / 8,
//     complitedTours: 11, upcomingTours: 14, canceledTours: 1, resheduledTours: 2, joindate: "Wed, 12 May 2011 08:00:00 GMT"
//   },
//   {
//     id: 104, status: "Blocked", state: "actor", city: "Hollywood", collagename: "Sylvester Stallone", firstname: "Sylvester", lastname: "Stallone", phone: "455-44-44", collageemail: "Stallone@mail.com", trainingComplited: 1 / 1,
//     complitedTours: 3, upcomingTours: 12, canceledTours: 12, resheduledTours: 12, joindate: "Wed, 25 May 2013 08:00:00 GMT"
//   },
// ]

const intialItems = [];

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
  const [stateItems, setState] = useState(intialItems);
  const [isDeleteBtnModalOpen, setIsOpen] = useState(false);
  const [selectedActionData, setSelectedActionData] = useState({});
  const { items, requestSort } = useSortableData(stateItems);

  useEffect(() => {
    getData()
  }, []);



  useEffect(() => {
    if (selectedActionData.action === "Delete") {
      openDeleteActionModal();
    }

    stateItems.forEach(item => {
      if (item.id === selectedActionData.id && selectedActionData.action !== "Delete") {
        if (selectedActionData.action === "Activate") {
          changeItem(item, "Active")
        }
        if (selectedActionData.action === "Block") {
          changeItem(item, "Blocked")
        }
      }
    });
  }, [selectedActionData]);

  const getData = () => {
    API.getAllItems().then(items => {
      const indexedStateItems = items.map((item, index) => {
        item.rowindex = Number(index + 1);
        return item
      });
      setState(indexedStateItems);
    });
  }

  const changeItem = (item, status) => {
    const editedItem = {
      id: item.id,
      status: status,
      state: item.state,
      city: item.city,
      collagename: item.collagename,
      firstname: item.firstname,
      lastname: item.lastname,
      phone: item.phone,
      collageemail: item.collageemail,
      trainingComplited: item.trainingComplited,
      complitedTours: item.complitedTours,
      upcomingTours: item.upcomingTours,
      canceledTours: item.canceledTours,
      resheduledTours: item.resheduledTours,
      joindate: item.joindate
    }

    API.changeItem(editedItem.id, editedItem).then(response => {
      if (response.status === 200) {
        alert("status changed");
        getData();
      };
      if (response.status !== 200) {
        alert("status not changed")
      }
    })
  }

  const handleChooseActionBtnClick = (val, id) => {
    const actionData = { id, action: val };
    setSelectedActionData(actionData)
  }

  const openDeleteActionModal = () => {
    setIsOpen(true)
  }

  const closeDeleteActionModal = () => {
    setIsOpen(false)
  }

  const handleClickDeleteInActionModal = () => {
    const itemId = selectedActionData.id;
    API.deleteItem(itemId).then(response => {
      if (response.status === 200) {
        alert("item deleted successfully");
        const updatedItems = stateItems.filter(item => item.id !== selectedActionData.id);
        setState(updatedItems);
        closeDeleteActionModal()
      }
      if (response.status !== 200) {
        alert("something went wrong!");
      }
    })

  }


  return (
    <div>
      <Table
        items={items}
        requestSort={(e) => requestSort(e.target.dataset['id'])}
        handleChooseActionBtnClick={handleChooseActionBtnClick}
      />
      {isDeleteBtnModalOpen &&
        <Modal
          onClose={closeDeleteActionModal}
          onDelete={handleClickDeleteInActionModal}
        />}

    </div>
  )
}
