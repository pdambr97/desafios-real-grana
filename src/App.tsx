import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import StartupChallenge from './pages/StartupChallenge'
import InvestorLeague from './pages/InvestorLeague'
import XpArena from './pages/XpArena'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { RegistrationProvider } from './stores/useRegistrationStore'

const App = () => (
  <BrowserRouter>
    <RegistrationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/startup-challenge" element={<StartupChallenge />} />
            <Route path="/investor-league" element={<InvestorLeague />} />
            <Route path="/xp-arena" element={<XpArena />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </RegistrationProvider>
  </BrowserRouter>
)

export default App
