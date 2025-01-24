import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch= () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() : void => {
    const savedData : string | null = localStorage.getItem('savedCandidates');
    if (savedData) {
      setSavedCandidates(JSON.parse(savedData));
    }
    fetchCandidateList().then(r => r);
  }, []);

  const fetchCandidateList = async () : Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response : any = await searchGithub();
      console.log('Response:', response);
      if (response.length > 0) {
        setUsers(response.map((user: any) : any => user.login));
        await fetchCandidateDetails(response[0].login);
      } else {
        setError('No candidates found');
      }
    } catch (err) {
      setError('Failed to fetch candidates.');
    }
    setLoading(false);
  };

  const fetchCandidateDetails : (username : string) => Promise<void> = async (username: string) : Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const userData : any = await searchGithubUser(username);
      setCandidate({
        name: userData.name,
        login: userData.login,
        location: userData.location,
        avatar_url: userData.avatar_url,
        email: userData.email,
        company: userData.company,
        html_url: userData.html_url,
        username: userData.login,
        blog: userData.blog,
        twitter_username: userData.twitter_username ?? null,
        hireable: userData.hireable ?? null,
        bio: userData.bio ?? null,
      });
    } catch (err) {
      setError('Failed to fetch candidate details.');
      setCandidate(null);
    }
    setLoading(false);
  };

  const saveCandidate = () => {
    if (candidate) {
      const updatedSavedCandidates : Candidate[] = [...savedCandidates, candidate];
      setSavedCandidates(updatedSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
      getNextCandidate();
    }
  };

  const getNextCandidate = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
      fetchCandidateDetails(users[currentIndex + 1]).then(r => r);
    } else {
      setCandidate(null);
    }
  };

  return (
    <main className="candidate-container">
      {loading && <p>Loading candidate...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && candidate ? (
        <div className="candidate-card">
          <img src={candidate.avatar_url} alt={candidate.name} className="candidate-avatar" />
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
          <div className="button-group">
            <button onClick={saveCandidate} className="btn-save">✅</button>
            <button onClick={getNextCandidate} className="btn-skip">❌</button>
          </div>
        </div>
      ) : (
        !loading && <p>No more candidates available</p>
      )}
    </main>
  );
};

export default CandidateSearch;
