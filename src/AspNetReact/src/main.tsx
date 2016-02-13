/// <reference path="..\typings\main\ambient\react-dom\react-dom.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Test from './components/Test.tsx';

ReactDOM.render(<Test />, document.getElementById('container'));
