// src/components/Section.js
import React, { useState } from 'react';

const Section = ({ section, updatePoints }) => {
  const [checkedStatements, setCheckedStatements] = useState(
    Array(section.statements.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedStatements = [...checkedStatements];
    newCheckedStatements[index] = !newCheckedStatements[index];
    setCheckedStatements(newCheckedStatements);

    // Each tick allocates 10 points, unchecking resets to 0.
    const points = newCheckedStatements.map((checked) => (checked ? 10 : 0));
    updatePoints(section.id, points);
  };

  return (
    <div>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
      {section.statements.map((statement, idx) => (
        <div key={idx}>
          <label>
            <input
              type="checkbox"
              checked={checkedStatements[idx]}
              onChange={() => handleCheckboxChange(idx)}
            />
            {statement}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Section;
