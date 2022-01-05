import React, { useState } from "react";
import TodoNavbar from "./components/TodoNavbar";
import "./styles/App.css";
import ListsList from "./components/ListsList";

function App() {
  let tema: string | null = localStorage.getItem("theme_setting_App_todo")
    ? localStorage.getItem("theme_setting_App_todo")
    : "" && localStorage.setItem("theme_setting_App_todo", "");
  const [theme, setTheme] = useState(tema);
  const handleTheme = (input: boolean) => {
    if (input) {
      setTheme("");
      localStorage.setItem("theme_setting_App_todo", "");
    } else {
      setTheme("bp3-dark");
      localStorage.setItem("theme_setting_App_todo", "bp3-dark");
    }
  };

  return (
    <div
      className={theme ? theme : ""}
      style={
        theme === ""
          ? {
              background: "white",
              minHeight: window.innerHeight,
              height: "100%",
              width: "100%",
            }
          : {
              background: "#293742",
              minHeight: window.innerHeight,
              height: "100%",
              width: "100%",
            }
      }
    >
      <TodoNavbar status={theme ? theme : ""} themeHandler={handleTheme} />
      <div className="jumbotron vertical-center">
        <div className="container m-5">
          <ListsList />
        </div>
      </div>
    </div>
  );
}

export default App;
