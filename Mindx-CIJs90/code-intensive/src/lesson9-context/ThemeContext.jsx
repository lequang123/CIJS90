import {createContext} from 'react';

const defaultValue = {theme: "red"}
const ThemeContext = createContext(defaultValue)

export default ThemeContext;