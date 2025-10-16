import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Presentation } from "./pages";

export default function MyApp() {
  return (
    <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Presentation />} />
            </Routes>
          </BrowserRouter>
    </QueryClientProvider>
  );
}