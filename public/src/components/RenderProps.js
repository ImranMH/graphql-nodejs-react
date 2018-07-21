import React from 'react'
import ToggleProps from './ToggleRenderProps';
import Toggle from './Toggle'
import TagleRCP from './ToggleRCP'
export default () => {
  return (
    <div>
      <TagleRCP>
        {
          ({ on, toggleState }) => (
            <div>
              {
                on && (
                  <h2>nav</h2>
                )
              }
              <button onClick={toggleState}> Show/Hide children</button>
            </div>
          )
        }
      </TagleRCP>
      <Toggle > <p> Toggle Render Props </p> </Toggle>
      <ToggleProps render={({ on, toggleState }) => (
        <div>
          {
            on && (
              <h2>nav</h2>
            )
          }
          <button onClick={toggleState}> Show/Hide</button>
        </div>
      )} > <h2> children data</h2> </ToggleProps>
    </div>
  )
}
