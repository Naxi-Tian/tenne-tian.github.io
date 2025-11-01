import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import FilmsBoomOperator from "./pages/FilmsBoomOperator";
import MeArtHistory from "./pages/MeArtHistory";
import PollenStation from "./pages/PollenStation";
import Research from "./pages/Research";
import SciencePopularization from "./pages/SciencePopularization";
import PersonalBlog from "./pages/PersonalBlog";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/films-boom-operator"} component={FilmsBoomOperator} />
      <Route path={"/me-art-history"} component={MeArtHistory} />
      <Route path="/pollen-station" component={PollenStation} />
      <Route path="/research" component={Research} />
      <Route path="/science-popularization" component={SciencePopularization} />
      <Route path="/personal-blog" component={PersonalBlog} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
