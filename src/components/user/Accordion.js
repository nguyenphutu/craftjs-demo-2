import React, { useState, useEffect } from 'react';
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
    actions: { setProp },
  } = useNode((node) => ({
    itemCount: node.data.props.itemCount,
  }));

  const [itemCount, setItemCount] = useState(props.itemCount || 0);

  useEffect(() => {
    setProp((props) => (props.itemCount = itemCount));
  }, [itemCount, setProp]);

  return (
    <BootstrapAccordion {...props} style={{ padding: '10px 0' }} ref={connect}>
      {children}
    </BootstrapAccordion>
  );
};

Accordion.craft = {
  props: {
    itemCount: 0,
  },
  rules: {
    canMoveIn: (incomingNodes) => {
      incomingNodes.forEach((incomingNode) => {
        incomingNode.data.props.id = `accordion-item-${incomingNode.id}`;
      });
      return incomingNodes.every((incomingNode) => incomingNode.data.type === AccordionItem);
    },
  },
};

export const AccordionMain = ({ background, padding = 20, ...props }) => {
  return (
    <Container {...props} background={background} padding={padding}>
      <Element canvas id="accordion" is={Accordion} data-cy="accordion">
        <AccordionItem id="1" title='Accordion Item Title' content='Accordion Item Content' />
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