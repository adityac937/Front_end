import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Home.css";
import Login from "../Login/Login";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import Aux from "../../hoc/Aux/Aux";
class Blog extends Component {
  render() {
    return (
      <Aux>
        <div className="Blog">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/home"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                      color: "rgb(241, 83, 55)",
                      textDecoration: "underline",
                    }}
                  >
                    Weather
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: "/contact",
                    }}
                    activeClassName="my-active"
                    activeStyle={{
                      color: "rgb(241, 83, 55)",
                      textDecoration: "underline",
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={{
                      pathname: "/login",
                    }}
                    activeClassName="my-active"
                    activeStyle={{
                      color: "rgb(241, 83, 55)",
                      textDecoration: "underline",
                    }}
                  >
                    Signup / Login
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />

            <Redirect from="/" exact to="/home" />
            <Route render={() => <Landing />} />
          </Switch>
        </div>
      </Aux>
    );
  }
}

export default Blog;
