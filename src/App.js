// src/App.js
import React, { useState } from 'react';
import Section from './components/Section';
import Results from './components/Results';
import Disclaimer from './components/Disclaimer';
import SEO from './components/SEO';

import { sections, roleMap } from './data';
import './styles.css';

import logo1 from './assets/esoft-logo.png'; // Replace with actual path
import logo2 from './assets/Main-University-logo-on-white-background.webp'; // Replace with actual path

function App() {
  const [scores, setScores] = useState({});
  const [results, setResults] = useState(null);

  const updatePoints = (sectionId, points) => {
    setScores({ ...scores, [sectionId]: points });
  };

  const calculateResults = () => {
    const totalScores = {};

    Object.keys(scores).forEach((section) => {
      scores[section].forEach((score, index) => {
        if (score > 0) {
          const role = roleMap[section][index];
          totalScores[role] = (totalScores[role] || 0) + score;
        }
      });
    });

    const sortedRoles = Object.entries(totalScores).sort((a, b) => b[1] - a[1]);
    setResults({
      primaryRole: sortedRoles[0][0],
      secondaryRole: sortedRoles[1][0],
    });
  };

  return (
    <div className="App">
       <SEO />
      <div className="logo-container">
        <img src={logo1} alt="Logo 1" className="logo" />
        <img src={logo2} alt="Logo 2" className="logo" />
      </div>
      <h1>Belbin Team Roles Assessment</h1>
      {sections.map((section) => (
        <Section key={section.id} section={section} updatePoints={updatePoints} />
      ))}
      <button onClick={calculateResults}>Show Results</button>
      {results && <Results results={results} />}
      <Disclaimer />
    </div>
  );
}

export default App;
