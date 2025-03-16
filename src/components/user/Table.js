import React from 'react';
import { useNode } from '@craftjs/core';
import { Form } from 'react-bootstrap';
import { Table as BTTable } from 'react-bootstrap';

export const Table = ({ data }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <BTTable striped bordered hover size="sm" ref={ref => connect(drag(ref))}>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </BTTable>
  );
};

const TableSettings = () => {
  const {
    actions: { setProp },
    data,
  } = useNode((node) => ({
    data: node.data.props.data,
  }));

  const handleDataChange = (e) => {
    const newData = JSON.parse(e.target.value);
    setProp((props) => (props.data = newData), 500);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Table Data (JSON)</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          value={JSON.stringify(data, null, 2)}
          onChange={handleDataChange}
        />
      </Form.Group>
    </Form>
  );
};

export const TableDefaultProps = {
  data: [
    { column1: 'Row 1 Col 1', column2: 'Row 1 Col 2' },
    { column1: 'Row 2 Col 1', column2: 'Row 2 Col 2' },
  ],
};

Table.craft = {
  props: TableDefaultProps,
  related: {
    settings: TableSettings,
  },
};
