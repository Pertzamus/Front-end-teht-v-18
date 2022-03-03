import ThemeContext from './ThemeContext';
import React from 'react';

function HeaderButton() {
  const themeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button style={themeContext}>Press me</button>
    </div>
  );
}

export default HeaderButton;
