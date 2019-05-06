import React, { useState, useCallback } from 'react';
import './styles/styles.scss';
import Switch from "./components/switch";

const App: React.FC = () => {
  const [themeClass, setThemeClass] = useState('theme-light');
  const [switchState, setSwitchState] = useState(false);

  const toggleTheme = useCallback(() => {
    if (themeClass === 'theme-light') {
      setThemeClass('theme-dark');
    } else {
      setThemeClass('theme-light');
    }
  }, [themeClass]);

  const toggleDisable = () => {
    setSwitchState(!switchState);
  };

  return (
    <div id="app-root" className={themeClass}>
      <div className="app">
        <button className="button" onClick={toggleTheme}>switch theme</button>

        <Switch disabled={switchState} />
        <Switch onToggle={toggleDisable} />
      </div>
    </div>
  );
};

export default App;
