import React, { useState } from "react";
import Slab from "./Slab";
import { selectorContext } from "./AppContext";

import {
  DefaultPalette,
  IStackStyles,
  IStackTokens,
  PivotItem,
  Stack,
  Text,
} from "@fluentui/react";
import TaskImage from "./TaskImage";
import Title from "./Title";
import Tabs from "./Tabs";
import Profile from "./Profile";
import Options from "./Options";

interface Props {}

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    borderRadius: 0,
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

const App = (props: Props) => {
  const [selectedKey, setSelectedKey] = useState("Boards");

  const handleLinkClick = (item?: PivotItem) => {
    if (item) {
      setSelectedKey(item.props.itemKey as any);
    }
  };

  if (selectedKey === "Boards") {
    return (
      <>
        <Slab></Slab>
        <Stack horizontal styles={stackStyles} tokens={stackTokens}>
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
          <Stack.Item styles={stackItemStylesRight} grow={1}>
            <Options></Options>
          </Stack.Item>
        </Stack>
        <div>
          <Text variant="xLargePlus">Boards</Text>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Slab></Slab>
        <Stack horizontal styles={stackStyles} tokens={stackTokens}>
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
          <Stack.Item styles={stackItemStylesRight} grow={1}>
            <Options></Options>
          </Stack.Item>
        </Stack>
        <div>
          <Text variant="xLargePlus">Calendar</Text>
        </div>
      </>
    );
  }
};

export default App;
