import { useState } from "react";
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Tabs,
  Tab,
  Alignment,
  NavbarDivider,
  Switch,
} from "@blueprintjs/core";
import { INavbar } from "../utils/interfaces";

const TodoNavbar = (props: INavbar) => {
  const [tabId, setTabId] = useState("Todo");
  const [switcher, setSwitcher] = useState(props.status === "" ? false : true);

  const { themeHandler } = props;

  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading className="logo">TODO App</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Tabs
          animate={true}
          id="navbar"
          large={true}
          onChange={(e) => {
            // @ts-ignore
            setTabId(e);
          }}
          selectedTabId={tabId}
        >
          <Tab id="Todo" title="Todo" />
          <Tab id="Done" title="Done" />
        </Tabs>
        <NavbarDivider />
        <Switch
          large={true}
          checked={switcher}
          onChange={(e) => {
            setSwitcher(!switcher);
            themeHandler(switcher);
          }}
          innerLabelChecked="🌙"
          innerLabel="☀️"
          style={{ margin: "0rem" }}
        />
      </NavbarGroup>
    </Navbar>
  );
};

export default TodoNavbar;
