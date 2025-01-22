import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object

const Options = {
  withCredentials: true,
  autoConnect: false
};

const URL = "http://localhost:8000";
export const socket = io(URL, Options);




