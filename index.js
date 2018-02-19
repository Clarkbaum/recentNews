import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// main app
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'))