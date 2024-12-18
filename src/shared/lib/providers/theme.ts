import { createStore} from 'effector';
import { createEvent } from 'effector';

export type Theme = 'light' | 'dark';

export const toggleTheme = createEvent();
export const $theme = createStore(<Theme>('light'));

$theme.on(toggleTheme, (current: string) => current === 'light' ? 'dark' : 'light');