import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Presentation } from "./components/presentation";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function MyApp() {
  console.log("Open Gallery React code running!");
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Presentation />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}