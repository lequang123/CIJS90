import ThemeContext from "./ThemeContext";
import {useContext} from 'react';

const Login = () => {
    const themeCtx = useContext(ThemeContext)
	
	const onSelectTheme = (event) => {
		themeCtx.handleSetTheme(event.target.value, 'thinh');
	}

	return (
		<div>
			<select value={themeCtx.theme} onChange={onSelectTheme}>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
			</select>
            <div style={{backgroundColor: themeCtx.theme === 'light' ? 'white': 'black'}}>background</div>
		</div>
	)
}

export default Login