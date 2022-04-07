import React from 'react';
import './style.css';
import MaterialTypography from './components/MaterialTypography.js';
import MaterialButton from './components/MaterialButton.js';
import MaterialTextField from './components/MaterialTextField.js';
import MaterialSelect from './components/MaterialSelect.js';
import MaterialRating from './components/MaterialRating.js';

export default function App() {
  return (
    <div className="App">
      {/* <MaterialTypography/> */}
      {/* <MaterialButton/> */}
      {/* <MaterialTextField /> */}
      {/* <MaterialSelect /> */}
      <MaterialRating />
    </div>
  );
}
