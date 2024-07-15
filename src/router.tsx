import { createBrowserRouter } from 'react-router-dom';
import Root from './components/set11/Root';
import Set12Root from './components/set12/Set12Root';
import ChampionDetail from './routes/set11/ChampionDetail';
import Home from './routes/set11/Home';
import Encounters from './routes/set11/Encounters';
import Items from './routes/set11/Items';
import Augments from './routes/set11/Augments';
import Portals from './routes/set11/Portals';
import Synergies from './routes/set11/Synergies';
import ProfileBackendTest from './routes/set11/ProfileBackendTest';
import Profile from './routes/set11/Profile';
import ProfileSearchAdapter from './routes/set11/ProfileSearchAdapter';
import MetaHome from './routes/set11/MetaHome';
import Set12Home from './components/set12/Set12Home';

const router = createBrowserRouter([
  {
    path: '/set11',
    element: <Root />,
    children: [
      {
        path: 'oldHome',
        element: <Home />,
      },
      {
        path: 'champions/:championPk',
        element: <ChampionDetail />,
      },
      {
        path: 'encounters',
        element: <Encounters />,
      },
      {
        path: 'items',
        element: <Items />,
      },
      {
        path: 'augments/:tier',
        element: <Augments />,
      },
      {
        path: 'portals',
        element: <Portals />,
      },
      {
        path: 'synergies',
        element: <Synergies />,
      },
      {
        path: 'profile_backend_test/:summonerName',
        element: <ProfileBackendTest />,
      },
      {
        path: 'search/:gameName/:tagLine',
        element: <ProfileSearchAdapter />,
      },
      { path: 'profile/:gameName/:tagLine', element: <Profile /> },
      {
        path: '',
        element: <MetaHome />,
      },
    ],
  },
  {
    path: '/set12',
    element: <Set12Root />,
    children: [
      {
        path: 'home',
        element: <Set12Home />,
      },
    ],
  },
]);

export default router;
