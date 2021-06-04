import { IPersonaSharedProps, Persona, PersonaSize } from "@fluentui/react";
import React from "react";

interface Props {}

const Profile = (props: Props) => {
  const person: IPersonaSharedProps = {
    text: "Roshan Badrinath",
    imageInitials: "RB",
  };

  return <Persona {...person} size={PersonaSize.size40}></Persona>;
};

export default Profile;
