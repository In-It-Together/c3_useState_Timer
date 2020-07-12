## React, State, and Counters

## Challenge Scope

This repository contains the third Dinasour coding challenge that will be taking place on July 11th from 9am to 11:30pm PST. Participant submissions can be found at the bottom of this document!

## Overview

Everything in a React Application is separated into _components_. Sometimes, in your application, you may want your component to have values that can update while the component is displayed on the page. These values are called **state**.

Examples of state in React are:

- An array of items you want to buy in an e-commerce store
- A string containing a color value that updates the background color
- An integer holding a user's score in a game

## React Hooks: Implementing Simple React State

The basic way of adding state to a component is as follows:

- **import** useState in the component file
- **set up** the **state value** and the **state updater function**, as well as the **initial value**
- **access** the state value by using the state value
- **update** the state value by using the state updater function

[Here's a great resource](https://reactjs.org/docs/hooks-reference.html#usestate) if you want the more technical explanation for useState.

We've provided some sample code in the starter code demonstrating how you might use the useState hook to implement a really simple timer. Here it is below:

```javascript
// importing useState
import React, { useState } from "react";

const ReferenceComponent = () => {
  // initial value variable
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
        Click Me!
      </button>
    </div>
  );
};

export default ReferenceComponent;
```

## The Challenge: Build Your Own Counter

Now that you have a basic understanding of how state works and how we used it to build a really simple counter, we want you to flex your own creative developer muscles and **build your own counter**.

If you want to get the most out of this challenge:

- Diagram/Plan what you want to make
- Create your own class/functional component from scratch!
  - **Use the ReferenceComponent.js as a guide, DO NOT copy/paste it!**
- Render your new component in App
- Add the basic functionality and test as you go
- Share your creation with the rest of us!

## But... you already built a counter!

Sometimes iterating on a simple design is a great way to learn. There are so many types of counters out there. Here are a couple ideas to consider when brainstorm some designs:

- What if your counter updates every second?
- What if something special happens based on a specific value of the counter?
- What if you connect multiple counters so they use each others' value?
- Are there any other types of values that would be fun to hold in state (booleans, strings etc.)?

Be creative, be silly, and use the internet for inspiration! This is an opportunity to challenge yourself and have fun!

## Participant Submissions

![Image of Joe's Counter](./thumbnails/pokedex-counter.png)

[Joe Avila](www.github.com/javila35) - [Pokedex](https://github.com/In-It-Together/c3_useState_Timer/tree/joe)
