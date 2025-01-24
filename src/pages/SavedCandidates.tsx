import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates= () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const removeCandidate = (username : string) => {
    if (savedCandidates.length > 0) {
      const updatedCandidates = [...savedCandidates].filter((candidate) => candidate.username !== username);
      setSavedCandidates(updatedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    }
  };

  return (
    <main className="saved-candidates-header">
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <div className="saved-candidates-container">
          {savedCandidates.map((candidate) => (
            <div key={candidate.username} className="saved-candidates">
              <img src={candidate.avatar_url} alt={candidate.name} className="candidate-avatar"/>
              <div>
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
              <button onClick={() => removeCandidate(candidate.username)} className="btn-remove">❌</button>
            </div>
          ))}

        </div>
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </main>
  );
};

export default SavedCandidates;
