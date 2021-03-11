/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Avatar } from "./components";
import { Badge } from "./components";
import { v4 as uuidv4, v4 } from "uuid";

const routes = [
  { id: v4(), path: "/avatar", name: "Avatar", component: <Avatar /> },
  { id: v4(), path: "/badge", name: "Badge", component: <Badge /> },
  { id: v4(), path: "/card", name: "Card", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
  { id: v4(), path: "/input", name: "Input", component: "<Card />" },
];

function App() {
  return (
    <>
      <div className="grid-row">
        <div className="heading">
          <div className="intro">
            <h1 className="heading-text"> Mind UI Documentation </h1>
            <ul className="list-style navbar">
              <li className="list-item">
                <a href="#"> Home </a>
              </li>
              <li className="list-item">
                <a href="#"> About </a>
              </li>
              <li className="list-item">
                <a href="#"> Github </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid-row">
        <Router>
          <div className="grid-col left-nav">
            <ul className="list-style">
              {routes.map(({ id, path, name }) => (
                <li className="list-item" key={id}>
                  <Link to={path}> {name} </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="grid-col">
            <div className="line-division"></div>
          </div> */}
          <div className="grid-col">
            <section>
              <Switch>
                {routes.map(({ id, path, component }) => (
                  <Route key={id} path={path}>
                    {component}
                  </Route>
                ))}
              </Switch>
            </section>
          </div>
        </Router> 
      </div>
    </>
  );
}

export default App;
