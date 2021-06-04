import { Pivot, PivotItem } from "@fluentui/react";
import React, { useContext } from "react";
import { selectorContext } from "./AppContext";

interface Props {}

const Tabs = (props: Props) => {
  const { selectedKey, handleLinkClick } = useContext(selectorContext);

  return (
    <Pivot onLinkClick={handleLinkClick} selectedKey={selectedKey}>
      <PivotItem headerText="Boards" itemKey="Boards"></PivotItem>
      <PivotItem headerText="Calendar" itemKey="Calendar"></PivotItem>
    </Pivot>
  );
};

export default Tabs;
