import React, { useState } from "react";
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

const TodoNavbar = (props) => {
  const [tabId, setTabId] = useState("Todo");
  const [switcher, setSwitcher] = useState(props.status === "" ? false : true);

  const { themeHandler } = props;

  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>TODO App</NavbarHeading>
        <NavbarDivider />
        <Tabs
          animate={true}
          id="navbar"
          large={true}
          onChange={(e) => {
            setTabId(e);
          }}
          selectedTabId={tabId}
        >
          <Tab id="Todo" title="Todo" />
          <Tab id="Done" title="Done" />
        </Tabs>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Switch
          label="Theme"
          large={true}
          checked={switcher}
          onChange={(e) => {
            setSwitcher(!switcher);
            themeHandler(switcher);
          }}
          innerLabelChecked="dark"
          innerLabel="light"
        />
      </NavbarGroup>
    </Navbar>
  );
};

export default TodoNavbar;
