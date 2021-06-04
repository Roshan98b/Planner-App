import React from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import { mergeStyles } from "@fluentui/merge-styles";
import { DefaultPalette } from "@fluentui/style-utilities";

interface Props {}

const TaskImage = (props: Props) => {
  const iconStyles = mergeStyles({
    fontSize: 40,
    backgroundColor: DefaultPalette.themeLighter,
    padding: "0.5rem",
    borderRadius: 0,
  });

  return (
    <div>
      <Icon iconName="Contact" title="My Task" className={iconStyles}></Icon>
    </div>
  );
};

export default TaskImage;
