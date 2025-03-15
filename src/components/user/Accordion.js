import React from 'react';
import { useNode, Element } from '@craftjs/core';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { AccordionItem } from './AccordionItem';

export const Accordion = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <BootstrapAccordion {...props} style={{ padding: '5px 0' }} ref={ref => connect(drag(ref))}>
      {children}
    </BootstrapAccordion>
  );
};

Accordion.craft = {
  rules: {
    canMoveIn: (incomingNodes) => {
      incomingNodes.forEach((incomingNode) => {
        incomingNode.data.props.id = `accordion-item-${incomingNode.id}`;
      });
      return incomingNodes.every((incomingNode) => incomingNode.data.type === AccordionItem);
    },
  },
};

export const AccordionMain = () => {
  return (
    <Element canvas id="accordion" is={Accordion} data-cy="accordion">
      <AccordionItem id="1" title='Accordion Item Title' content='Accordion Item Content' />
    </Element>
  );
};
