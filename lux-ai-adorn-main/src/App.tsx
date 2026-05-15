import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Survey from "./pages/Survey";
import FaceAnalysis from "./pages/FaceAnalysis";
import CelebrityMatch from "./pages/CelebrityMatch";
import Recommendations from "./pages/Recommendations";
import ARTryOn from "./pages/ARTryOn";
import CustomDesign from "./pages/CustomDesign";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/face-analysis" element={<FaceAnalysis />} />
          <Route path="/celebrity-match" element={<CelebrityMatch />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/ar-tryon" element={<ARTryOn />} />
          <Route path="/custom-design" element={<CustomDesign />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
