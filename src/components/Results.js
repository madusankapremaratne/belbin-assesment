// src/components/Results.js
import React from 'react';
import { rolesDescriptions } from '../data';

const Results = ({ results }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Primary Role: {results.primaryRole}</p>
      <p>{rolesDescriptions[results.primaryRole]}</p>
      <p>Secondary Role: {results.secondaryRole}</p>
      <p>{rolesDescriptions[results.secondaryRole]}</p>
    </div>
  );
};

export default Results;
