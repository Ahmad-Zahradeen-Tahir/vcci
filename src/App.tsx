import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "../src/components/ui/toaster";
import { Navbar } from "../src/components/layout/Navbar";
import { Footer } from "../src/components/layout/Footer";
import { ScrollToTop } from "../src/components/ScrollToTop";

// Pages
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Staff from "../src/pages/Staff";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import NotFound from "../src/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/staff" component={Staff} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Router />
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
