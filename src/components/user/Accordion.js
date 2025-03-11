import React from 'react';
import { useNode, Element } from '@craftjs/core';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';
import { AccordionItem } from './AccordionItem';
import {
  Container,
  ContainerSettings,
  ContainerDefaultProps,
} from './Container';

export const Accordion = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <BootstrapAccordion {...props} style={{ padding: '10px 0' }} ref={connect}>
      {children}
    </BootstrapAccordion>
  );
};

Accordion.craft = {
  rules: {
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === AccordionItem),
  },
};

export const AccordionMain = ({ background, padding = 20, ...props }) => {
  return (
    <Container {...props} background={background} padding={padding}>
      <Element canvas id="accordion" is={Accordion} data-cy="accordion">
        <AccordionItem title= 'Accordion Item Title' content= 'Accordion Item Content'/>
      </Element>
    </Container>
  );
};

AccordionMain.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};