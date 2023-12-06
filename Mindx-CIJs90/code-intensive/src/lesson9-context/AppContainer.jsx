import ThemeContext from './ThemeContext';
import {useState} from 'react'
import Login from './Login';

const AppContainer = () => {
	const [theme, setTheme] = useState({theme: "light"});

	const handleSetTheme = () =>{
		setTheme(theme);
	};

	return (
		<>
			<ThemeContext.Provider value={{theme: theme, handleSetTheme: handleSetTheme}}>
				<h1>App</h1>
				<Login></Login>
			</ThemeContext.Provider>
			
		</>


	)
}

export default AppContainer;