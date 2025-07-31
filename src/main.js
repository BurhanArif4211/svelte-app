import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const originalWarn = console.warn;
console.warn = function(message) {
    if (!message.includes("[Intervention] Slow network is detected")) {
        originalWarn.apply(console, arguments);
    }
};

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
