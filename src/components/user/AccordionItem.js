import React from 'react';
import { useNode } from '@craftjs/core';
import { Accordion as BootstrapAccordion, Form } from 'react-bootstrap';
import { Text } from './Text';

export const AccordionItem = ({ id, title, content }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <BootstrapAccordion.Item eventKey={id} ref={ref => connect(drag(ref))}>
      <BootstrapAccordion.Header>
        <Text text={title} fontSize={20} />
      </BootstrapAccordion.Header>
      <BootstrapAccordion.Body>
        <Text text={content} fontSize={14} />
      </BootstrapAccordion.Body>
    </BootstrapAccordion.Item>
  );  
};

const AccordionItemSettings = () => {
  const {
    actions: { setProp },
    title,
    content,
  } = useNode((node) => ({
    title: node.data.props.title,
    content: node.data.props.content,
  }));

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Accordion Item Header</Form.Label>
          <Form.Control placeholder={title} onChange={(e) => setProp((props) => (props.title = e.target.value), 500)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Accordion Item Content</Form.Label>
          <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setProp((props) => (props.content = e.target.value), 500)} />
        </Form.Group>
      </Form>
    </>
  );
};


export const AccordionItemDefaultProps = {
  id: '',
  title: 'Accordion Item Title',
  content: 'Accordion Item Content',
};

AccordionItem.craft = {
  props: AccordionItemDefaultProps,
  related: {
    settings: AccordionItemSettings,
  },
};
