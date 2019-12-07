import React, { useState } from "react";
import { Modal, Text, Button } from "onexp";

const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Modals
      </Text>
      <Button
        type="primary"
        text="Show Modal"
        onClick={() => setModalVisible(true)}
      />
      <Modal
        show={modalVisible}
        close={() => setModalVisible(false)}
        header="Sample Modal"
        hasFooter
        submitText="Hello Moto"
      ></Modal>
    </div>
  );
};

export default Modals;
