import { Link } from 'react-router-dom'
import {
  Rocket,
  TrendingUp,
  Gamepad2,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Target,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StatsCounter } from '@/components/StatsCounter'
import useRegistrationStore from '@/stores/useRegistrationStore'
import { cn } from '@/lib/utils'

export default function Index() {
  const { openModal } = useRegistrationStore()

  const challenges = [
    {
      id: 'startup',
      title: 'Startup Challenge',
      desc: 'Crie soluções inovadoras, monte seu modelo de negócios e faça um pitch para investidores reais.',
      icon: <Rocket className="w-10 h-10 text-startup" />,
      color: 'bg-startup',
      hover: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]',
      path: '/startup-challenge',
      tags: ['Inovação', 'Pitch'],
    },
    {
      id: 'investor',
      title: 'Investor League',
      desc: 'Opere em um simulador de mercado com R$100k virtuais e defenda sua tese de investimentos.',
      icon: <TrendingUp className="w-10 h-10 text-investor" />,
      color: 'bg-investor',
      hover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      path: '/investor-league',
      tags: ['Mercado', 'Estratégia'],
    },
    {
      id: 'xp',
      title: 'XP Arena',
      desc: 'Competições de eSports focadas no desenvolvimento do "Currículo Invisível" (Soft Skills).',
      icon: <Gamepad2 className="w-10 h-10 text-xp" />,
      color: 'bg-xp',
      hover: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
      path: '/xp-arena',
      tags: ['eSports', 'Soft Skills'],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-navy to-navy pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Empreendedorismo', 'Investimentos', 'Tecnologia', 'Estratégia'].map((tag, i) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={cn(
                    'border-white/20 text-white/80 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-sm animate-fade-in-up',
                    `stagger-${i + 1}`,
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight">
              Os desafios que preparam os alunos para o{' '}
              <span className="text-gradient-gold">futuro que já começou.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Experiências nacionais que transformam teoria em prática e conectam estudantes ao
              mundo real.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                onClick={() => openModal('school')}
                size="lg"
                className="w-full sm:w-auto bg-gold text-navy hover:bg-gold/90 font-bold text-lg h-14 px-8 transition-transform hover:scale-105"
              >
                Quero inscrever minha escola
              </Button>
              <Button
                onClick={() => openModal('student')}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-navy bg-white hover:bg-white/90 hover:text-navy font-bold text-lg h-14 px-8 transition-transform hover:scale-105"
              >
                Sou aluno e quero participar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white mb-4">
              Três jornadas, um objetivo: <br className="hidden md:block" /> Preparação real.
            </h2>
            <p className="text-lg text-muted-foreground">
              Escolha a trilha que mais combina com o perfil da sua escola ou equipe e entre na
              arena.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, i) => (
              <div
                key={challenge.id}
                className={cn(
                  'group relative bg-card rounded-2xl p-8 border border-border transition-all duration-300',
                  'hover:-translate-y-2 cursor-pointer flex flex-col h-full animate-fade-in-up',
                  challenge.hover,
                  `stagger-${i + 1}`,
                )}
              >
                <div className="mb-6 bg-muted w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {challenge.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">{challenge.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {challenge.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link
                  to={challenge.path}
                  className={cn('flex items-center font-semibold mt-auto', `text-${challenge.id}`)}
                >
                  Saiba Mais{' '}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <StatsCounter end={450} suffix="+" />
              <p className="text-gold font-medium uppercase tracking-wider text-sm">
                Escolas Parceiras
              </p>
            </div>
            <div className="space-y-2">
              <StatsCounter end={12} suffix="k" />
              <p className="text-gold font-medium uppercase tracking-wider text-sm">
                Alunos Impactados
              </p>
            </div>
            <div className="space-y-2">
              <StatsCounter end={25} suffix="+" />
              <p className="text-gold font-medium uppercase tracking-wider text-sm">
                Desafios Realizados
              </p>
            </div>
            <div className="space-y-2">
              <StatsCounter end={5} suffix=" Anos" />
              <p className="text-gold font-medium uppercase tracking-wider text-sm">
                De Experiência
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizer Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 space-y-6">
              <Badge className="bg-navy text-white">Quem Organiza</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy dark:text-white">
                A chancela de quem entende o jogo.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Real Grana é referência na criação de experiências educacionais imersivas. Nossos
                desafios já integraram as maiores olimpíadas do conhecimento do país, sempre com
                foco em métricas reais, aprendizado prático e engajamento ímpar.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-gold" />,
                    text: 'Conteúdo alinhado à BNCC',
                  },
                  {
                    icon: <Trophy className="w-5 h-5 text-gold" />,
                    text: 'Certificação nacional para participantes',
                  },
                  {
                    icon: <Target className="w-5 h-5 text-gold" />,
                    text: 'Suporte completo para educadores',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    {item.icon} {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'OBInvest', query: 'bank' },
                  { name: 'BRHSIC', query: 'global' },
                  { name: 'Olimpíada Ágora', query: 'monument' },
                  { name: 'Future Leaders', query: 'star' },
                ].map((partner, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-8 flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:shadow-lg hover:border-gold/30"
                  >
                    <img
                      src={`https://img.usecurling.com/i?q=${partner.query}&shape=outline&color=solid-black`}
                      alt={partner.name}
                      className="h-12 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                    <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
