import React from 'react';
import './App.scss';
import Header from 'components/header/Header';
import ContentLibrary from 'components/contentLibrary/ContentLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentLibrary />
    </div>
  );
}

export default App;
