import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Events, { loader as eventLoader } from './pages/Events';
import { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import EventDetailPage from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventsRootLayout />,
        children: [
          {
            index: true, element: <Events />,
            loader: eventLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction

              },
              { path: 'edit', element: <EditEvent />, action: manipulateEventAction }

            ]
          },
          { path: 'new', element: <NewEvent />, action: manipulateEventAction },

        ]
      }
    ]
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;