import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  // State to hold saved candidates
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Load saved candidates from local storage when the component mounts
  useEffect(() => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <div className="candidate-list">
          {savedCandidates.map((candidate, index : number) => (
            <div key={index} className="candidate-card">
              <img
                src={candidate.avatar_url}
                alt={candidate.name}
                className="candidate-avatar"
              />
              <h2>{candidate.name}</h2>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location || 'Unknown'}</p>
              <p>Email: {candidate.email || 'Not available'}</p>
              <p>Company: {candidate.company || 'Not specified'}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
