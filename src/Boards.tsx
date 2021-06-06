import {
  ActionButton,
  DefaultPalette,
  Depths,
  IIconProps,
  IStackStyles,
  IStackTokens,
  List,
  mergeStyles,
  Persona,
  PersonaSize,
  Stack,
  Text,
} from "@fluentui/react";
import React from "react";
import { items } from "./Items";

interface Props {}

const Boards = (props: Props) => {
  const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.white,
      padding: "1rem",
    },
  };

  const stackItemStyles: IStackStyles = {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "20rem",
    },
  };

  const stackTokens: IStackTokens = {
    childrenGap: "5rem",
  };

  const addIcon: IIconProps = { iconName: "Add" };

  const elevationStyle = mergeStyles({
    boxShadow: Depths.depth8,
  });

  const elementStyle = mergeStyles({
    boxShadow: Depths.depth8,
    margin: "1rem 0",
  });

  const taskItemStyle = mergeStyles({
    display: "flex",
    padding: "0.2rem",
    alignItems: "center",
  });

  const onRenderCell = (item?: any, index?: number): JSX.Element => {
    return (
      <div className={elementStyle}>
        <Stack>
          <Stack.Item className={taskItemStyle}>
            <Stack horizontal>
              <Stack.Item className={taskItemStyle}>
                <Text variant="xLarge">{index}</Text>
              </Stack.Item>
              <Stack.Item className={taskItemStyle}>
                <Text variant="xLarge">{item.taskName}</Text>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item className={taskItemStyle}>
            <Text variant="mediumPlus">{item.date}</Text>
          </Stack.Item>
          <Stack.Item className={taskItemStyle}>
            <Persona
              imageInitials={item.initial}
              text={`Completed By ${item.name}`}
              size={PersonaSize.size24}
            ></Persona>
          </Stack.Item>
        </Stack>
      </div>
    );
  };

  return (
    <div>
      <Stack horizontal wrap styles={stackStyles} tokens={stackTokens}>
        <Stack.Item styles={stackItemStyles}>
          <Text
            variant="xLarge"
            className={mergeStyles({ paddingBottom: "1rem" })}
          >
            Not Started
          </Text>
          <div className={elevationStyle}>
            <ActionButton iconProps={addIcon}>Add Item</ActionButton>
          </div>
        </Stack.Item>
        <Stack.Item styles={stackItemStyles}>
          <div>
            <Text variant="xLarge">In progress</Text>
          </div>
        </Stack.Item>
        <Stack.Item styles={stackItemStyles}>
          <div>
            <Text variant="xLarge">Completed</Text>
          </div>
          <List items={items as any} onRenderCell={onRenderCell}></List>
        </Stack.Item>
      </Stack>
    </div>
  );
};

export default Boards;
