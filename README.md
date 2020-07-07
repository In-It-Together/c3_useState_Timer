## React, State, and Timers

## Overview

Everything in a React Application is separated into components. Sometimes, in your application, you may want your component to have values that can update while the component is displayed on the page. These values are called **state**.

Examples of state in React are:

- An array of items you want to buy in an e-commerce store
- A string containing a hex color value that updates the color of the webpage background
- An integer holding a user's score in a game

## React Hooks: Implementing Simple React State

The basic way of adding state to a component is as follows:

- **import** useState in the component file
- **set up** the **state value** and the **state updater function**, as well as the **initial value**
- **display** the state value by using the state value
- **update** the state value by using the state updater

We've provided some sample code in the starter code demonstrating how you might use the useState hook to implement a really simple timer. Here it is below:

```
// importing useState
import React, { useState } from "react";

const ReferenceComponent = () => {
  // when component renders for first time
  const initialValue = 0;

  // state declaration holding [value, updateFunction]
  const [stateValue, stateUpdater] = useState(initialValue);

  // component render
  return (
    <div>
      {/* lets display our state in a p tag */}
      <p>{stateValue}</p>

      {/* lets provide a button to update our state */}
      <button onClick={() => stateUpdater(previousState => previousState + 1)}>
        Update State
      </button>
    </div>
  );
};

export default ReferenceComponent;
```
