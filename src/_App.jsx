import { GlobalLayout } from './GlobalLayout/GlobalLayout';
import { GlobalProvider } from './GlobalProvider/GlobalProvider';
import { Routes } from './Routes/Routes';

/**
 * App Component: This is the root component of the React app, it contains GlobalProvider that contains
 * all the providers needed for the app, also renders the GlobalLayout component
 * that provides global layout and navigation elements, and then renders the Routes component to handle
 * routing to different pages in the app.
 * @returns {JSX.Element} React element representing the root component of the app
 */
export function App() {
  return (
    <GlobalProvider>
      <GlobalLayout>
        <Routes />
      </GlobalLayout>
    </GlobalProvider>
  );
}
