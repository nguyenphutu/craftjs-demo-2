import { useEditor } from '@craftjs/core';
import {
  Container,
  Row,
  Col,
  Button as BootstrapButton,
} from 'react-bootstrap';
import React from 'react';

import { Button } from './user/Button';
import { Card } from './user/Card';
import { Text } from './user/Text';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
      <Container>
        <Row>
          <div class="border p-3">
            <h5>Drag to add</h5>
          </div>
          <Col>
            <BootstrapButton
              ref={(ref) =>
                connectors.create(ref, <Button text="Click me" size="small" />)
              }
              variant="primary"
            >
              Button
            </BootstrapButton>
          </Col>
          <Col>
            <BootstrapButton
              ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
              variant="primary"
            >
              Text
            </BootstrapButton>
          </Col>
          <Col container direction="column" item>
            <BootstrapButton
              ref={(ref) => connectors.create(ref, <Card />)}
              variant="primary"
            >
              Card
            </BootstrapButton>
          </Col>
        </Row>
    </Container>
  );
};