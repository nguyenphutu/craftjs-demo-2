import { useEditor, Element } from '@craftjs/core';
import React from 'react';

import { Button } from './user/Button';
import { Card } from './user/Card';
import { Container } from './user/Container';
import { Text } from './user/Text';
import { BootstrapAccordion as Accordion } from './user/Accordion';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
      <div class="d-grid gap-2 col-10 mx-auto p-3">
        <h5 class="text-center">Drag to add</h5>
        <button class="btn btn-primary" type="button" 
          ref={(ref) => connectors.create(ref, <Button text="Click me" size="small" />)}
        >
          Button
        </button>
        <button class="btn btn-primary" type="button" 
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
        >
          Text
        </button>
        <button class="btn btn-primary" type="button" 
          ref={(ref) =>
            connectors.create(
              ref,
              <Element canvas is={Container} padding={20} />
            )
          }
        >
          Container
        </button>
        <button class="btn btn-primary" type="button" 
          ref={(ref) => connectors.create(ref, <Card />)}
        >
          Card
        </button>

        <button class="btn btn-primary" type="button" 
          ref={(ref) => connectors.create(ref, <Accordion />)}
        >
          Accordion
        </button>
      </div>
  );
};