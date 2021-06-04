import {
  CommandButton,
  ContextualMenu,
  IContextualMenuProps,
  Stack,
} from "@fluentui/react";
import React from "react";

interface Props {}

const Options = (props: Props) => {
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: "emailMessage",
        text: "Email message",
        iconProps: { iconName: "Mail" },
      },
      {
        key: "calendarEvent",
        text: "Calendar event",
        iconProps: { iconName: "Calendar" },
      },
    ],
    directionalHintFixed: true,
  };

  const _getMenu = (props: IContextualMenuProps) => {
    return <ContextualMenu {...props} />;
  };

  return (
    <Stack horizontal>
      <Stack.Item>
        <CommandButton
          text="Filter"
          menuProps={menuProps}
          menuAs={_getMenu as any}
          persistMenu={true}
          allowDisabledFocus
        />
      </Stack.Item>
      <Stack.Item>
        <CommandButton
          text="Group by Progress"
          menuProps={menuProps}
          menuAs={_getMenu as any}
          persistMenu={true}
          allowDisabledFocus
        />
      </Stack.Item>
    </Stack>
  );
};

export default Options;
