import React, { useState } from "react";
import Slab from "./Slab";
import { selectorContext } from "./AppContext";

import {
  DefaultPalette,
  IStackStyles,
  IStackTokens,
  PivotItem,
  Stack,
} from "@fluentui/react";
import TaskImage from "./TaskImage";
import Title from "./Title";
import Tabs from "./Tabs";
import Profile from "./Profile";
import Options from "./Options";
import Boards from "./Boards";
import Calendar from "./Calendar";

interface Props {}

const App = (props: Props) => {
  const [selectedKey, setSelectedKey] = useState("Boards");

  const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.white,
    },
  };

  const stackItemStylesLeft: IStackStyles = {
    root: {
      display: "flex",
      justifyContent: "flex-start",
      fontSize: 20,
      alignItems: "center",
      marginLeft: 20,
    },
  };

  const stackItemStylesRight: IStackStyles = {
    root: {
      display: "flex",
      justifyContent: "flex-end",
      fontSize: 20,
      alignItems: "center",
      marginRight: 20,
    },
  };

  const stackTokens: IStackTokens = {
    childrenGap: 20,
    padding: 5,
  };

  const handleLinkClick = (item?: PivotItem) => {
    if (item) {
      setSelectedKey(item.props.itemKey as any);
    }
  };

  const renderBody = (selectedKey: string) => {
    if (selectedKey === "Boards") {
      return <Boards></Boards>;
    } else {
      return <Calendar></Calendar>;
    }
  };

  return (
    <>
      <Slab></Slab>
      <Stack horizontal wrap styles={stackStyles} tokens={stackTokens}>
        <Stack.Item styles={stackItemStylesLeft} grow={0}>
          <TaskImage></TaskImage>
        </Stack.Item>
        <Stack.Item styles={stackItemStylesLeft} grow={1}>
          <Title></Title>
        </Stack.Item>
        <Stack.Item styles={stackItemStylesLeft} grow={3}>
          <selectorContext.Provider
            value={{
              selectedKey: selectedKey,
              handleLinkClick: handleLinkClick,
            }}
          >
            <Tabs></Tabs>
          </selectorContext.Provider>
        </Stack.Item>
        <Stack.Item styles={stackItemStylesRight} grow={0}>
          <Profile></Profile>
        </Stack.Item>
        <Stack.Item styles={stackItemStylesRight} grow={0}>
          <Options></Options>
        </Stack.Item>
      </Stack>
      {renderBody(selectedKey)}
    </>
  );
};

export default App;
