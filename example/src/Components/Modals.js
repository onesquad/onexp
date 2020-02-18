import React, { useState } from "react";
import { Modal, Text, Button } from "onexp";

const Modals = () => {
  const [modalVisible, setModalVisible] = useState(true);
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
        header={
          <div className="fx-row">
            Sample Modal
            <Text size="h5" color="muted">
              <i class="ri-information-line ri-md ml--xs"></i>
            </Text>
          </div>
        }
        subHeading={
          <Text size="micro" color="muted" extraClass="mt--xs">
            Learn more about sample modals in OneSquad <a>here</a>
          </Text>
        }
        hasFooter
        submitText="Hello Moto"
      ></Modal>
    </div>
  );
};

export default Modals;
