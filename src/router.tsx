import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Champions from './routes/Champions';
import ChampionDetail from './routes/ChampionDetail';
import Home from './routes/Home';
import Encounters from './routes/Encounters';
import Items from './routes/Items';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'champions',
                element: <Champions />,
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
        ],
    },
]);

export default router;
