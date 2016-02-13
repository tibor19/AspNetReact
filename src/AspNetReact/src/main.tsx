/// <reference path="../typings/main.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App.tsx';
import Counter from './components/Counter.tsx';

ReactDOM.render(
    <div>
        <App /> 
        <Counter initialCount="10" />
    </div>
    , document.getElementById('container'));
