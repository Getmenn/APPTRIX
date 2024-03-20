import { useRoutes } from 'react-router-dom';

import { createRouter } from '../config/createRouter';

export const RouterProvider = () => useRoutes(createRouter());
