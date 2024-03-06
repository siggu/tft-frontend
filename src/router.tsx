import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Champions from "./routes/Champions";
import ChampionDetail from "./routes/ChampionDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "champions",
        element: <Champions />,
      },
      {
        path: "champions/:championPk",
        element: <ChampionDetail />,
      },
    ],
  },
]);

export default router;
