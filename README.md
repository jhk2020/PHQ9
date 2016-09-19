# PHQ9 Questionnaire
Mobile-first patient-health questionnaire to self-diagnose depression.

Built with React + Redux, Redux Thunk, Webpack, and Babel.

### Thought Process
To avoid over-engineering the application, I decided against implementing any routing or creating my own server file. Instead, it is built on top of webpack-dev-server. If the application were to scale and deal with more complex data, additional libraries like [normalizr](https://github.com/paularmstrong/normalizr), [reselect](https://github.com/reactjs/reselect), and [Immutable.js](https://facebook.github.io/immutable-js/) can be used for more abstractions.

In terms of its structure, the application is organized into `modules`, which are essentially the main "sections" of the application -- the intro, the questions, and the results. It consists of a wrapper component, its dumb component, and styling. I decided to put actions and reducers in separate folders, as separating UI and data logic allows for more flexibility in picking and choosing which pieces of data should be funneled to a module. Furthermore, it keeps the state store as simple as possible with only the most fundamental information.

### Setup
```
npm install
npm start
```
Then point your browser to `http://localhost:8080/`.
### Testing
Tests were only written for the `Question` module, focusing on its action creator, reducer, and component UI.
```
npm run test
```
