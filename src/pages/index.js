import { Editor, Frame, Element } from '@craftjs/core';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { SettingsPanel } from '../components/SettingsPanel';
import { Toolbox } from '../components/Toolbox';
import { Topbar } from '../components/Topbar';
import { Button } from '../components/user/Button';
import { Card, CardBottom, CardTop } from '../components/user/Card';
import { Container } from '../components/user/Container';
import { Text } from '../components/user/Text';
import { AccordionMain as BootstrapAccordion, Accordion  } from '../components/user/Accordion';
import { AccordionItem } from '../components/user/AccordionItem';

export default function App() {
  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <h5 style={{ margin: '20px 0' }} variant="h5" align="center">
        Basic Page Editor
      </h5>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
          BootstrapAccordion,
          AccordionItem,
          Accordion
        }}
      >
        <Topbar />
        <div className="container">
          <div className="row justify-content-center" style={{ paddingTop: '10px' }} >
            <div className="col-md-8">
              <Frame>
                <Element
                  canvas
                  is={Container}
                  padding={5}
                  background="#eeeeee"
                  data-cy="root-container"
                >
                  <Card data-cy="frame-card" />
                  <Button text="Click me" size="small" data-cy="frame-button" />
                  <Text fontSize={20} text="Hi world!" data-cy="frame-text" />
                  <BootstrapAccordion/>
                  <Element
                    canvas
                    is={Container}
                    padding={6}
                    background="#999999"
                    data-cy="frame-container"
                  >
                    <Text
                      size="small"
                      text="It's me again!"
                      data-cy="frame-container-text"
                    />
                  </Element>
                </Element>
              </Frame>
            </div>
            <div className="col-md-4">
                <div 
                  style={{
                    background: 'rgb(252, 253, 253)',
                  }}
                >
                  <Toolbox />
                  <SettingsPanel />
                </div>
            </div>
          </div>
        </div>
      </Editor>
    </div>
  );
}