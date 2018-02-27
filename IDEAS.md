# Side effects and the case for redux saga

what are side effects?
- action -> something -> reaction
- most apps have side effects, or else they are not very interesting or useful
- redux only tells us how to manage the state,not side effects

- current solutions:
    thunks
    dispatching from component

- trivial example
- semi trivial example
- non trvial example

- issues:
    - lack of seperation of concerns
    - testability
    - reacting to events is not possible, only values
    - logic 

- what if I wanted to:
    - react to multiple events? wait for an event to happen in sequence
    - timing based events
    - write better tests of side effects
    - cancel actions? retry actions?

- sagas
    - under the hood, its all powered by generators
    - intro to generators
        - passing values into generators

saga vocaublary (how do we represent side effect management)
    - take
    - put
    - call
    - fork
    - race
    - select

uses of sagas:
    - organizing code into domains (auth, notifications, analytics)
    - wrapping sagas to a common vocabulary
    - timing based events
    - reacting to events from multiple locations

When not to use sagas
 - overkill
 - overengineering

Alternatives:
 - observables
 - thunks
 - dispatch from component