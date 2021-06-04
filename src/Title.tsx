import { Stack, Text } from "@fluentui/react";
import React from "react";

interface Props {}

const Title = (props: Props) => {
  return (
    <Stack>
      <Stack.Item>
        <MainTitle></MainTitle>
      </Stack.Item>
      <Stack.Item>
        <SubTitle></SubTitle>
      </Stack.Item>
    </Stack>
  );
};

const MainTitle = () => {
  return (
    <Text variant="xLarge" nowrap>
      My Task
    </Text>
  );
};

const SubTitle = () => {
  return (
    <Text variant="medium" nowrap>
      My Sub Task
    </Text>
  );
};

export default Title;
