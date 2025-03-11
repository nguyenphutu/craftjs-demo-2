import React from 'react';
import { useNode } from '@craftjs/core';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import PropTypes from 'prop-types';
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

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

AccordionItem.craft = {
  props: {
    id: '',
    title: 'Accordion Item Title',
    content: 'Accordion Item Content',
  },
};