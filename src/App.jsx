import React, {useEffect, useState } from 'react';
import './App.css';
import NamesColumn from './components/NamesColumn';
import logo from '../images/WildBingoLogo.png';

export default function App() {
  useEffect(() => {
    alert(" et surtout : GIT COMMIT GIT COMMIT GIT COMMIT !!! ;)");
  }, []);
  const [names, setNames]
  = useState(
    [
      "Name 1",
      "Name 2",
      "Name 3",
      "Name 4",
      "Name 5"
    ]
  );
  const [features, setFeatures]
  = useState(
    [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5"
    ]
  );
  // Fonction pour mettre à jour le nom
  const handleNameChange = (nameIndex, newValue) => {
    const newNames = [...names];
    newNames[nameIndex] = newValue;
    setNames(newNames);
  };
  // Function pour mettre à jour les features
  const handleFeatureChange = (featureIndex, newValue) => {
    const newFeatures = [...features];
    newFeatures[featureIndex] = newValue;
    setFeatures(newFeatures);
  };
  return (
    <>
      <header className="header">
        <img className="logo" src={logo} alt="" />
        <h1 className="title">Wild Bingo</h1>
      </header>
      <main>
      <p className="instruction"> À vous de jouez !</p>
      <p className="instruction">Cochez les cases pour valider vos Features du P2 !</p>
      <NamesColumn
        names={names}
        features={features}
        onNameChange={handleNameChange}
        onFeatureChange={handleFeatureChange}
      />
      </main>
      <footer>
        <p>© Made with 🤍 by wilders</p>
      </footer>
    </>
  );
}