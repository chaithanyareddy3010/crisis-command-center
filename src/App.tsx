import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IncidentProvider } from "./context/IncidentContext";
import Dashboard from "./pages/Dashboard";
import NewIncident from "./pages/NewIncident";
import Chat from "./pages/Chat";
import IncidentHistory from "./pages/IncidentHistory";
import IncidentDetails from "./pages/IncidentDetails";
import TechnicianDirectory from "./pages/TechnicianDirectory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <IncidentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/new-incident" element={<NewIncident />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/history" element={<IncidentHistory />} />
            <Route path="/incident/:id" element={<IncidentDetails />} />
            <Route path="/technicians" element={<TechnicianDirectory />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </IncidentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
