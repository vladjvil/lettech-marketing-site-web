import { Navigation } from '../widgets/navigation';
import { ThemeProvider } from '../shared/lib/providers/theme-provider';
import {RouterProvider} from "atomic-router-react";
import {router} from "../shared/routing.ts";
import {Pages} from "../pages";

import { Footer } from '../widgets/footer';

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Pages />
          </main>
          <Footer />
        </div>
      </RouterProvider>
    </ThemeProvider>
  );
}
