import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Изначально пробовала использовать device-detector.js, но на ios появлялась ошибка, поэтому способ определения платформы такой
const mobile: Boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
let App;

if (mobile) {
    App = require('./components/mobile/App/App').App;
} else {
    App = require('./components/desktop/App/App').App;
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

serviceWorker.unregister();
