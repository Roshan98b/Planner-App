import React from "react";
import "./App.css";

import {
  DefaultPalette,
  IStackStyles,
  IStackTokens,
  Stack,
} from "@fluentui/react";

interface Props {}

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    borderRadius: 0,
  },
};

const stackItemStyles: IStackStyles = {
  root: {
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
  },
};

const stackTokens: IStackTokens = {
  childrenGap: 20,
  padding: 20,
};

const App = (props: Props) => {
  return (
    <>
      <div className="slab"></div>
      <Stack
        horizontal
        horizontalAlign="space-evenly"
        styles={stackStyles}
        tokens={stackTokens}
      >
        <Stack.Item styles={stackItemStyles} grow={0}>
          <span>Item 1</span>
        </Stack.Item>
        <Stack.Item styles={stackItemStyles} grow={1}>
          <span>Item 2</span>
        </Stack.Item>
        <Stack.Item styles={stackItemStyles} grow={2}>
          <span>Item 3</span>
        </Stack.Item>
        <Stack.Item styles={stackItemStyles} grow={0}>
          <span>Item 4</span>
        </Stack.Item>
        <Stack.Item styles={stackItemStyles} grow={2}>
          <span>Item 5</span>
        </Stack.Item>
      </Stack>
    </>
  );
};

export default App;
