import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../../lesson10-buttons/components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClosingModal = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClosing={handleClosingModal}
      actionBar={
        <Button primary onClick={handleClosingModal}>
          Accept
        </Button>
      }>
      <p>Please click on the Accept button to complete the process</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
