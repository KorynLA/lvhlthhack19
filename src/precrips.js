import React from 'react';
import {
  Button,
  Jumbotron, Table } from 'reactstrap';

export default class Prescrips extends React.Component {
  render() {
    return (
      <div>
      <h2>Medication</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Date Assigned</th>
            <th>Name</th>
            <th>Dosage</th>
            <th>Adverse Effect</th>
          </tr>
        </thead>
      <tbody>
        <tr>
          <td>27-Oct-2019</td>
          <td>Novolog</td>
          <td>3mL</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>27-Oct-2019</td>
          <td>Zoloft</td>
          <td>25mg</td>
          <td>Insomnia noted through wearable technology</td>
        </tr>
      </tbody>
    </Table>
    </div>
    );
  }
}