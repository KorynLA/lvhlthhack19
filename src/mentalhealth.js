import React from 'react';
import {
  Button,
  Jumbotron, Table } from 'reactstrap';

export default class MentalHealth extends React.Component {
  render() {
    return (
      <div>
      <h1>Mental Health</h1>
      <h3>Happy Days </h3>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Happy</th>
            <th>Unhappy</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>5</td>
        </tr>
      </tbody>
    </Table>
    </div>
    );
  }
}