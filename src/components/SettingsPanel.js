import { useEditor } from '@craftjs/core';
import {
  Container,
  Row,
  Col,
  Badge,
  Button as BootstrapButton,
} from 'react-bootstrap';
import React from 'react';

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last();
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      isEnabled: state.options.enabled,
    };
  });

  return isEnabled && selected ? (
    <Container style={{ backgroundColor: "rgba(0, 0, 0, 0.06)", padding: 16, marginTop: 16 }}>
      <Row>
        <Col>
          <Row>
            <Col>
              <h5 variant="subtitle1">Selected</h5>
            </Col>
            <Col style={{textAlign: 'center'}}>
              <Badge bg="info">{selected.name}</Badge>
            </Col>
          </Row>
        </Col>
        <div data-cy="settings-panel">
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          <BootstrapButton
            variant="info"
            onClick={() => {
              actions.delete(selected.id);
            }}
          >
            Delete
          </BootstrapButton>
        ) : null}
      </Row>
    </Container>
  ) : null;
};