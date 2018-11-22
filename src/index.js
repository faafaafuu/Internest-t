import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

import createStore from './store';

ReactDOM.render(<Provider store={createStore()}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
