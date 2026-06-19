import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import useRegistrationStore from '@/stores/useRegistrationStore'
import { RegistrationModal } from './RegistrationModal'
import logoFull from '@/assets/logo-brancamargemreduzida-9e185.png'
import logoSymbol from '@/assets/logo-simbolo-2-8e510.png'

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { openModal } = useRegistrationStore()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Startup Challenge', path: '/startup-challenge' },
    { name: 'Investor League', path: '/investor-league' },
  ]

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-gold/30">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
          isScrolled || isMobileMenuOpen
            ? 'bg-background/80 backdrop-blur-md border-border shadow-sm'
            : 'bg-transparent',
        )}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoFull}
              alt="Real Grana"
              className="h-8 md:h-10 w-auto object-contain hidden md:block"
            />
            <img
              src={logoSymbol}
              alt="Real Grana"
              className="h-8 w-auto object-contain md:hidden"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold',
                  location.pathname === link.path ? 'text-gold' : 'text-muted-foreground',
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button
              onClick={() => openModal()}
              className="bg-gold text-navy hover:bg-gold/90 font-semibold shadow-glow transition-all hover:scale-105 active:scale-95"
            >
              Realizar Inscrição
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            'md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg transition-all duration-300 origin-top overflow-hidden',
            isMobileMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0 border-transparent shadow-none',
          )}
        >
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-medium p-2 rounded-md hover:bg-accent text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false)
                openModal()
              }}
              className="w-full mt-4 bg-gold text-navy hover:bg-gold/90 font-semibold"
            >
              Realizar Inscrição
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <img
                  src={logoFull}
                  alt="Real Grana"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-gray-400 max-w-sm mb-6">
                Experiências nacionais que transformam teoria em prática e conectam estudantes ao
                mundo real.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy cursor-pointer transition-colors">
                  in
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy cursor-pointer transition-colors">
                  ig
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy cursor-pointer transition-colors">
                  yt
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-gold">Desafios</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/startup-challenge"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Startup Challenge
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investor-league"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Investor League
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-gold">Institucional</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sobre a Real Grana
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Para Escolas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-400">
              © 2024 Desafios Real Grana. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-sm font-semibold">Parceiros:</span>
              <img
                src="https://img.usecurling.com/i?q=university&shape=outline&color=white"
                alt="OBInvest"
                className="h-6"
              />
              <img
                src="https://img.usecurling.com/i?q=building&shape=outline&color=white"
                alt="BRHSIC"
                className="h-6"
              />
              <img
                src="https://img.usecurling.com/i?q=shield&shape=outline&color=white"
                alt="Olimpíada Ágora & ESEG"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </footer>

      <RegistrationModal />
    </div>
  )
}
