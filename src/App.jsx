/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  Alert,
  Button,
  Card,
  Image,
  Input,
  List,
  Navigation,
  Modal,
} from "./components";
import { v4 as uuidv4, v4 } from "uuid";

const routes = [
  { id: v4(), path: "/avatar", name: "Avatar", component: <Avatar /> },
  { id: v4(), path: "/badge", name: "Badge", component: <Badge /> },
  { id: v4(), path: "/alert", name: "Alert", component: <Alert /> },
  { id: v4(), path: "/button", name: "Button", component: <Button /> },
  { id: v4(), path: "/card", name: "Card", component: <Card /> },
  { id: v4(), path: "/image", name: "Image", component: <Image /> },
  { id: v4(), path: "/input", name: "Input", component: <Input /> },
  { id: v4(), path: "/list", name: "List", component: <List /> },
  { id: v4(), path: "/nav", name: "Navigation", component: <Navigation /> },
  { id: v4(), path: "/modal", name: "Modal", component: <Modal /> },
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
            <Switch>
              {routes.map(({ id, path, component }) => (
                <Route key={id} path={path}>
                  {component}
                </Route>
              ))}
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
