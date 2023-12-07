
// import SimpleForm from './components/SimpleForm';
// import Login from './components/Login';
// import LoginYup from './components/LoginYup';

import Registration2 from "./components/Registration2";
import MyTable from './components/MyTable';
import ModalComponent from "./components/ModalComponent";
import Modal from "./components/Modal";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
// import NotificationContainer from "./components/NotificationContainer";
// import Popup from "./components/NotificationContainer";

export default function App2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeactivate = () => {
    console.log('Account deactivated');
    closeModal();
  };
  
  return (
    <>
      <Dashboard />
    
      <div>
          <button onClick={openModal}>Open Deactivate Modal</button>
          {isModalOpen && (
            <Modal onClose={closeModal} handleDeactivate={handleDeactivate} /> // Pass the close function to handle modal close
            )}
      </div>
            {/* <Popup content="hello" variant="red" />
            <Popup content="Hello, world! This is a toast message." variant="teal" /> */}
      <ModalComponent />
      <MyTable />
      <Registration2 />
    </>
  );
}
