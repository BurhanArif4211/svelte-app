import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const originalWarn = console.warn;
console.warn = function(message) {
    if (!message.includes("[Intervention]")) {
        originalWarn.apply(console, arguments);
    }
};
console.log(
` _______                                                                
|       \\                                                               
| $$$$$$$\\  ______                                                      
| $$__/ $$ /      \\                                                     
| $$    $$|  $$$$$$\\                                                    
| $$$$$$$\\| $$    $$                                                    
| $$__/ $$| $$$$$$$$                                                    
| $$    $$ \\$$     \\                                                    
 \\$$$$$$$   \\$$$$$$$                                                    
 _______                       __  __              __      __           
|       \\                     |  \\|  \\            |  \\    |  \\          
| $$$$$$$\\  ______    ______  | $$ \\$$  _______  _| $$_    \\$$  _______ 
| $$__| $$ /      \\  |      \\ | $$|  \\ /       \\|   $$ \\  |  \\ /       \\
| $$    $$|  $$$$$$\\  \\$$$$$$\\| $$| $$|  $$$$$$$ \\$$$$$$  | $$|  $$$$$$$
| $$$$$$$\\| $$    $$ /      $$| $$| $$ \\$$    \\   | $$ __ | $$| $$      
| $$  | $$| $$$$$$$$|  $$$$$$$| $$| $$ _\\$$$$$$\\  | $$|  \\| $$| $$_____ 
| $$  | $$ \\$$     \\ \\$$    $$| $$| $$|       $$   \\$$  $$| $$ \\$$     \\
 \\$$   \\$$  \\$$$$$$$  \\$$$$$$$ \\$$ \\$$ \\$$$$$$$     \\$$$$  \\$$  \\$$$$$$$`);
const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
