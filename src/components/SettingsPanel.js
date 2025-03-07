import { useEditor } from '@craftjs/core';
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
    <div class="container text-center p-2" bgcolor="rgba(0, 0, 0, 0.06)" >
      <div class="row">
        <div class="col">
          <div class="row text-center">
            <div class="col-6">
              <h5 variant="subtitle1">Selected</h5>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-info">{selected.name}</button>
            </div>
          </div>
        </div>
        <div data-cy="settings-panel">
          {selected.settings && React.createElement(selected.settings)}
        </div>
        {selected.isDeletable ? (
          <div class="col">
            <button type="button" class="btn btn-secondary" onClick={() => {
              actions.delete(selected.id);
            }} >Delete</button>
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
};