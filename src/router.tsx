import { Navigate, createHashRouter } from 'react-router-dom';
import Set11Root from './components/set11/Set11Root';
import Set12Root from './components/set12/Set12Root';
import Set11ChampionDetail from './routes/set11/Set11ChampionDetail';
import Set11Home from './routes/set11/Set11Home';
import Set11Encounters from './routes/set11/Set11Encounters';
import Set11Items from './routes/set11/Set11Items';
import Set11Augments from './routes/set11/Set11Augments';
import Set11Portals from './routes/set11/Set11Portals';
import Set11Synergies from './routes/set11/Set11Synergies';
import Set11ProfileBackendTest from './routes/set11/Set11ProfileBackendTest';
import Set11Profile from './routes/set11/Set11Profile';
import Set11ProfileSearchAdapter from './routes/set11/Set11ProfileSearchAdapter';
import Set11MetaHome from './routes/set11/Set11MetaHome';
import Set12Home from './routes/set12/Set12Home';
import Set12Augments from './routes/set12/Set12Augments';
import Set12Items from './routes/set12/Set12Items';
import Set12ChampionDetail from './routes/set12/Set12ChampionDetail';
import Set12Synergies from './routes/set12/Set12Synergies';
import Set12Portals from './routes/set12/Set12Portals';
import Set12Rewards from './routes/set12/Set12Rewards';
import Set12Charms from './routes/set12/Set12Charms';
import Set12Profile from './routes/set12/Set12Profile';
import Set12ProfileSearchAdapter from './routes/set12/Set12ProfileSearchAdapter';
import Set12MetaHome from './routes/set12/Set12MetaHome';
import RiotTxt from './routes/set12/RiotTxt';
import RiotTxtRedirect from './routes/set12/RiotTxt';
import NotFound from './routes/NotFound';

const router = createHashRouter([
  {
    path: '/set11',
    element: <Set11Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'oldHome',
        element: <Set11Home />,
      },
      {
        path: 'champions/:championPk',
        element: <Set11ChampionDetail />,
      },
      {
        path: 'encounters',
        element: <Set11Encounters />,
      },
      {
        path: 'items',
        element: <Set11Items />,
      },
      {
        path: 'augments/:tier',
        element: <Set11Augments />,
      },
      {
        path: 'portals',
        element: <Set11Portals />,
      },
      {
        path: 'synergies',
        element: <Set11Synergies />,
      },
      {
        path: 'profile_backend_test/:summonerName',
        element: <Set11ProfileBackendTest />,
      },
      {
        path: 'search/:gameName/:tagLine',
        element: <Set11ProfileSearchAdapter />,
      },
      {
        path: 'profile/:gameName/:tagLine',
        element: <Set11Profile />,
      },
      {
        path: '',
        element: <Set11MetaHome />,
      },
    ],
  },
  {
    path: '/set12',
    element: <Set12Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'oldHome',
        element: <Set12Home />,
      },
      {
        path: 'riot.txt',
        element: <RiotTxtRedirect />,
      },

      {
        path: '',
        element: <Set12MetaHome />,
      },
      {
        path: 'champions/:championPk',
        element: <Set12ChampionDetail />,
      },
      {
        path: 'items',
        element: <Set12Items />,
      },
      {
        path: 'augments/:tier',
        element: <Set12Augments />,
      },
      {
        path: 'portals',
        element: <Set12Portals />,
      },
      {
        path: 'synergies',
        element: <Set12Synergies />,
      },
      {
        path: 'rewards',
        element: <Set12Rewards />,
        children: [
          {
            path: ':rewardType',
            element: <Set12Rewards />,
          },
        ],
      },
      {
        path: 'charms',
        element: <Set12Charms />,
        children: [
          {
            path: ':tier',
            element: <Set12Charms />,
          },
        ],
      },
      {
        path: 'search/:gameName/:tagLine',
        element: <Set12ProfileSearchAdapter />,
      },
      { path: 'profile/:gameName/:tagLine', element: <Set12Profile /> },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/set12" replace />,
    errorElement: <NotFound />,
  },
]);

export default router;
