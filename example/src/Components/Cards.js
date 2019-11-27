import React from "react";
import { Card, Text } from "onexp";

const Cards = () => {
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Cards
      </Text>
      <div className="grid">
        <div className="col-8">
          <Card title={"Personal Info"}>
            <div className="grid ptb--sm">
              <div className="col-4">
                <Text size="h4">Name</Text>
              </div>
              <div className="col-8">
                <Text size="h4" color="muted">
                  Goutham Subramanyam N
                </Text>
              </div>
            </div>
            <div className="grid ptb--sm">
              <div className="col-4">
                <Text size="h4">Role</Text>
              </div>
              <div className="col-8">
                <Text size="h4" color="muted">
                  Front End Developer
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cards;
