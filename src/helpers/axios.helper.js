import axios from 'axios';

import { defaultUrl } from '../configurations';

const axiosInstance = axios.create({ baseURL: defaultUrl });

export { axiosInstance };
