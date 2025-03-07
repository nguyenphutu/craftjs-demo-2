import React, { useState } from 'react';
import {
  ContainerSettings,
  ContainerDefaultProps,
} from './Container';
import { Accordion } from 'react-bootstrap';


export const BootstrapAccordion = ({ background, padding = 20, ...props }) => {
  const [items] = useState([
    { id: 1, title: "Item 1", content: "Nội dung của Item 1" },
    { id: 2, title: "Item 2", content: "Nội dung của Item 2" },
  ]);
  return (
    <div className="container">
      <Accordion defaultActiveKey="0">
        {items.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>{item.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

BootstrapAccordion.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
