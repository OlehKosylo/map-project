import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { applicationConfig } from './configurations';

ReactDOM.render(applicationConfig(), document.getElementById('root'));
