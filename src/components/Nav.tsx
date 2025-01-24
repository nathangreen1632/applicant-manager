import { Link } from 'react-router-dom';

const Nav= () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Candidate Search</Link></li>
        <li><Link to="/SavedCandidates">Saved Candidates</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
