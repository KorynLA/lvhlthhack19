import React from 'react';
import {
  Button,
  Jumbotron } from 'reactstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Routes from "./routes";
export default class patient extends React.Component {
  render() {
    return (
    <div className="homeContainer">
        <div className="well">
          <LinkContainer to="/patient">
                  <Button block bsSize="large">Patient</Button>
              </LinkContainer>
              <LinkContainer to="/doctor">
                <Button block bsSize="large">Doctor Login</Button>
              </LinkContainer>
        </div>
    </div>
    );
  }
}