import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/menu';
import Title from "./components/title";
import Logo from "./components/assets/logo.png";

ReactDOM.render(
  <React.StrictMode>
    <Title
      title="Data Informasi Pasien Rumah Sakit"
      title2="Health Center Hospital"
      subtitle="2021"
      image={Logo}
    />
    <Menu />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
