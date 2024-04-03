import React from 'react';

const NamesColumn = ({ names, features, onNameChange, onFeatureChange }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th> {/* Cellule vide en haut à gauche */}
          {names.map((name, nameIndex) => (
            <th key={nameIndex}>
              <input
                type="text"
                value={name}
                onChange={(e) => onNameChange(nameIndex, e.target.value)}
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((feature, featureIndex) => (
          <tr key={featureIndex}>
            <th>
              <input
                type="text"
                value={feature}
                onChange={(e) => onFeatureChange(featureIndex, e.target.value)}
              />
            </th>
            {names.map((_,featuresIndex) => (
              <td key={featuresIndex}><input type="checkbox" className="checkbox" unchecked /></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NamesColumn;