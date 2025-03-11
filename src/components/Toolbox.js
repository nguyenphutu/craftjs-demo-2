import { useEditor, Element } from '@craftjs/core';
import {
  Container as BootstrapContainer,
  Row,
  Col,
  Button as BootstrapButton,
} from 'react-bootstrap';
import React from 'react';

import { Button } from './user/Button';
import { Card } from './user/Card';
import { Container } from './user/Container';
import { Text } from './user/Text';
import { Accordion as BootstrapAccordion } from './user/Accordion';
import { AccordionItem } from './user/AccordionItem';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <BootstrapContainer style={{ padding: 16}}>
      <Row>
        <Col style={{ paddingBottom: 16, textAlign: 'center'}}>
          <h5>Drag to add</h5>
        </Col>
        <div className="d-grid gap-2">
          <BootstrapButton
            ref={(ref) =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
            variant="primary"
          >
            Button
          </BootstrapButton>
          <BootstrapButton
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            variant="primary"
          >
            Text
          </BootstrapButton>
          <BootstrapButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element canvas is={Container} padding={20} />
              )
            }
            variant="primary"
          >
            Container
          </BootstrapButton>
          
          <BootstrapButton
            ref={(ref) => connectors.create(ref, <Card />)}
            variant="primary"
          >
            Card
          </BootstrapButton>
          <BootstrapButton
            ref={(ref) => connectors.create(ref, <BootstrapAccordion />)}
            variant="primary"
          >
            Bootstrap Accordion
          </BootstrapButton>

          <BootstrapButton
            ref={(ref) => connectors.create(ref, <AccordionItem />)}
            variant="primary"
          >
            Accordion Item
          </BootstrapButton>
        </div>
      </Row>
    </BootstrapContainer>
  );
};