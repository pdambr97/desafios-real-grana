import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import StartupChallenge from './pages/StartupChallenge'
import InvestorLeague from './pages/InvestorLeague'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { RegistrationProvider } from './stores/useRegistrationStore'
import { RegistrationModal } from '@/components/RegistrationModal'
import { MeetingModal } from '@/components/MeetingModal'
import { AuthProvider } from '@/hooks/use-auth'
import { ScrollToTop } from '@/components/ScrollToTop'

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <RegistrationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RegistrationModal />
          <MeetingModal />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/startup-challenge" element={<StartupChallenge />} />
              <Route path="/investor-league" element={<InvestorLeague />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </RegistrationProvider>
    </AuthProvider>
  </BrowserRouter>
)

export default App
