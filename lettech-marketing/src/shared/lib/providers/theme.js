import { createStore } from 'effector';
import { createEvent } from 'effector';

const toggleTheme = createEvent();
const $theme = createStore('light');

$theme.on(toggleTheme, (current) => (current === 'light' ? 'dark' : 'light'));

export { toggleTheme, $theme };