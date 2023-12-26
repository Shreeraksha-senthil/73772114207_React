import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <br /><br />
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                <br /><br />Student Profile<br /><br />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td className="area">SHREERAKSHA T S</td>
            </tr>
            <tr>
              <td>Register Number</td>
              <td className="area">73772114207</td>
            </tr>
            <tr>
              <td>Department</td>
              <td className="area">Computer Science and Engineering</td>
            </tr>
            <tr>
              <td>Year</td>
              <td className="area">3rd Year</td>
            </tr>
            <tr>
              <td>Area of Interest</td>
              <td className="area">Web Development and Testing</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default App;
