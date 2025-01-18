import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.tsx';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
