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

  const removeCandidate = () => {
    if (savedCandidates.length > 0) {
      const updatedCandidates = [...savedCandidates];
      updatedCandidates.pop();
      setSavedCandidates(updatedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    }
  };

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <div className="candidate-list">
          {savedCandidates.map((candidate, index: number) => (
            <div key={index} className="candidate-card">
              <img
                src={candidate.avatar_url}
                alt={candidate.name}
                className="candidate-avatar"
              />
              <h2>{candidate.name}</h2>
              <p>Username: {candidate.login ?? 'No Username Provided'}</p>
              <p>Bio: {candidate.bio ?? 'No Bio available'}</p>
              <p>Blog: {candidate.blog || 'No Blog available'}</p>
              <p>Email: {candidate.email || 'No Email available'}</p>
              <p>Location: {candidate.location || 'No Location specified'}</p>
              <p>Company: {candidate.company || 'No Company specified'}</p>
              <p>Twitter Username: {candidate.twitter_username ?? 'Not Specified'}</p>
              <p>Hireable: {candidate.hireable || 'Not open to work'}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </div>
          ))}
          <div className="button-group">
            <button onClick={removeCandidate} className="btn-skip">❌</button>
          </div>
        </div>
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
