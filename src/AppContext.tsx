import { createContext } from "react";

export const selectorContext = createContext({
  selectedKey: "",
  handleLinkClick: () => {},
});
