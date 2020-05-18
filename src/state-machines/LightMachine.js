import { createMachine, interpret } from 'xstate';

const lightMachine = createMachine({
  // Your state machine blueprint here
  id: 'lightToggle',
  initial: 'red',
  states: {
    red: {
      on: {
        changeLight: 'green',
      },
    },
    green: {
      on: {
        changeLight: 'yellow',
      },
    },
    yellow: {
      on: {
        changeLight: 'red',
      },
    },
  },
});


const service = interpret(lightMachine);

export { lightMachine, service };

// reference: https://adaacademy.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7cb5ab1e-c5f4-41ce-af37-abb8008b8985

// https://xstate.js.org/viz/