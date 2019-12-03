import React, { useState } from "react";
import { Avatar, Text, Toastr } from "onexp";

const Avatars = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="xp-animate--fadeIn">
      <Text size="jumbo" weight="bold" extraClass="mb--lg">
        Avatars
      </Text>
      <div className="fx-row mb--lg">
        <Avatar
          extraClass="mr--md"
          size="sm"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        />
        <Avatar
          extraClass="mr--md"
          size="md"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        />
        <Avatar
          extraClass="mr--md"
          size="lg"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        />
        <Avatar
          extraClass="mr--md"
          size="xl"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        />
      </div>
    </div>
  );
};

export default Avatars;
