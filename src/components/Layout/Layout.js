import React, { Component } from "react";
import {
  Route,
  Switch,
} from 'react-router-dom'
import glamorous from "glamorous";
import Container from "../LayoutComponents/Container/Container";
import Row from "../LayoutComponents/Row/Row";
import HeaderFooter from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ScreenNav from "../ScreenNav";
import Screen1 from "../../screens/screen1/Screen1";
import Screen2 from "../../screens/screen2/Screen2";
import Screen3 from "../../screens/screen3/Screen3";
import SubScreen1 from "../../screens/screen1/children/subScreen1";
import SubScreen2 from "../../screens/screen1/children/subScreen2";
import SubScreen3 from "../../screens/screen1/children/subScreen3";
import FaBars from "react-icons/lib/fa/bars";
import nav from '../../nav';
import "../../styles/skeleton.css";

const MyApp = glamorous.div({
  margin: "0",
  padding: "0",
  backgroundColor: "#fff",
  color: "#444",
  overflowY: "hidden"
});
const StyledScreen = glamorous.div({ margin: "0", padding: "0" });

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenIndex: 1,
      sidebarIs: "closed"
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentWillMount() {
    // this.eventEmitter = new EventEmitter();
  }


  toggleSidebar() {
    this.setState({
      sidebarIs: this.state.sidebarIs === "open" ? "closed" : "open"
    });
  }

  render() {
    return (
      <MyApp>
          <Row>
            <HeaderFooter 
              className="twelve columns" 
              css={{ height: "5vh" }}
            >
              <ScreenNav routes={nav.siteMap}>
                <FaBars
                  width={"1.5em"}
                  height={"1.5em"}
                  onClick={this.toggleSidebar}
                />
              </ScreenNav>
            </HeaderFooter>
          </Row>

          <Container>
            <Row
              css={{ marginLeft: this.state.sidebarIs === "open" ? "-22%" : "0" }}
            >
              <Sidebar {...this.props}
                columnSize="three"
                toggle={this.state.sidebarIs}
                css={{ height: "92vh" }}
                routes={nav.siteMap}
              />              
              <StyledScreen className="twelve columns">

                <Switch>                 
                  <Route exact path="/screen1/a" component={SubScreen1} />
                  <Route exact path="/screen1/b" component={SubScreen2} />
                  <Route exact path="/screen1/c" component={SubScreen3} />
                  <Route path="/screen1" component={Screen1} />
                  <Route path="/screen2" component={Screen2} />
                  <Route path="/screen3" component={Screen3} />
                </Switch>

              </StyledScreen>
            </Row>
          </Container>
        <Row>
          <HeaderFooter
            className="twelve columns"
            css={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              height: "3vh"
            }}
          >
            Collin made this
          </HeaderFooter>
        </Row>
      </MyApp>
    );
  }
}

module.exports = Layout