import { RouterProvider } from "atomic-router-react";
import { Pages } from './pages';
import { Navigation } from "./widgets/navigation/Navigation";
import { ThemeProvider } from "./shared/lib/providers/theme-provider";
import { router } from "./shared/routing";
import { Footer } from "./widgets/footer/Footer";

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
