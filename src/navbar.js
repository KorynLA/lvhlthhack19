import React from 'react';
import Prescrips from './precrips';
import MentalHealth from './mentalhealth';
import {VictoryChart, VictoryTheme, VictoryScatter, VictoryAxis, VictoryLine} from 'victory';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.css';

function UserAvatar(props) {
  // If a user avatar is available, return an img tag with the pic
  if (props.user.avatar) {
    return <img
            src={props.user.avatar} alt="user"
            className="rounded-circle align-self-center mr-2"
            style={{width: '32px'}}></img>;
  }

  // No avatar available, return a default icon
  return <i
          className="far fa-user-circle fa-lg rounded-circle align-self-center mr-2"
          style={{width: '32px'}}></i>;
}

function AuthNavItem(props) {
  // If authenticated, return a dropdown with the user's info and a
  // sign out button
  if (props.isAuthenticated) {
    return (
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          <UserAvatar user={props.user}/>
        </DropdownToggle>
        <DropdownMenu right>
          <h5 className="dropdown-item-text mb-0">{props.user.displayName}</h5>
          <p className="dropdown-item-text text-muted mb-0">{props.user.email}</p>
          <DropdownItem divider />
          <DropdownItem onClick={props.authButtonMethod}>Sign Out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  // Not authenticated, return a sign in link
  return (
    <NavItem>
      <NavLink onClick={props.authButtonMethod}>Sign In</NavLink>
    </NavItem>
  );
}

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // Only show calendar nav item if logged in
    let calendarLink = null;
    if (this.props.isAuthenticated) {
      calendarLink = (
       <Container>
            <br></br><br></br><br></br>
              <Prescrips />
              <h1>Trackable readings since last visit</h1>
              <h3> Last vist was 7 days ago. </h3>
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
      <VictoryScatter
        y={(data) => Math.abs(Math.sin(2 * Math.PI * data.x)+30)}
        samples={25}
        size={5}
        style={{ data: { fill: "tomato" }}}
      />
      <VictoryLine
        style={{ data: { stroke: "orange" }}}
        y={(data) => Math.abs(Math.sin(2 * Math.PI * data.x)+30)}
      />
      <VictoryAxis/>
      <VictoryAxis dependentAxis/>
    </VictoryChart>

    <VictoryChart style={{ parent: { maxWidth: "50%" } }}>
      <VictoryAxis/>
      <VictoryAxis dependentAxis/>
      <VictoryLine
        style={{ data: { stroke: "orange" }}}
        y={(data) => Math.abs(Math.cos(2 * Math.PI * data.x)+10)}
      />
      <VictoryScatter
        y={(data) => Math.abs(Math.cos(2 * Math.PI * data.x)+10)}
        samples={25}
        size={5}
        style={{ data: { fill: "tomato" }}}
      />
    </VictoryChart>
  </div>
    <MentalHealth/>
          </Container>
      );
    }

    return (
      <div>
        <Navbar color="primary" dark expand="md" fixed="top">
          <Container>
            <NavbarBrand href="/">Loren's Doctor Port</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <RouterNavLink to="/" className="nav-link" exact>Patients</RouterNavLink>
                </NavItem>
              </Nav>
              <Nav className="justify-content-end" navbar>
                <AuthNavItem
                  isAuthenticated={this.props.isAuthenticated}
                  authButtonMethod={this.props.authButtonMethod}
                  user={this.props.user} />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <br></br><br></br><br></br>
        {calendarLink}

      </div>
    );
  }
}