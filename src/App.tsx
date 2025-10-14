import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Presentation, AboutMe, Gallery } from "./pages";

// TODO (No order)
// Upload to plugin store
// Integrate with an external API to call random assets (maybe multiple)
// Call Favorites api to your favorites page
// Take notes on mutation and what is going on here/ breakdown
// Redo interfaces from api

export default function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Presentation />} />
              <Route path='/about' element={<AboutMe />} />
              <Route path='/gallery' element={<Gallery />} />
            </Routes>
          </BrowserRouter>
    </QueryClientProvider>
  );
}