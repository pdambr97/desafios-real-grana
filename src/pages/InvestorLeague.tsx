import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import useRegistrationStore from '@/stores/useRegistrationStore'
import {
  LineChart,
  BarChart3,
  Calendar,
  CheckCircle2,
  Download,
  Presentation,
  Play,
  ShieldAlert,
  BrainCircuit,
  Search,
  Globe2,
  Users,
  MessageSquare,
  Building,
  Clock,
  Briefcase,
} from 'lucide-react'

export default function InvestorLeague() {
  const { openModal } = useRegistrationStore()

  const skills = [
    { name: 'Gestão de risco', icon: <ShieldAlert className="w-6 h-6" /> },
    { name: 'Tomada de decisão', icon: <BrainCircuit className="w-6 h-6" /> },
    { name: 'Análise de empresas', icon: <Search className="w-6 h-6" /> },
    { name: 'Leitura de mercado', icon: <Globe2 className="w-6 h-6" /> },
    { name: 'Trabalho em equipe', icon: <Users className="w-6 h-6" /> },
    { name: 'Comunicação', icon: <MessageSquare className="w-6 h-6" /> },
  ]

  const schedule = [
    { date: 'Março/2026', title: 'Abertura da Liga e Treinamento na Plataforma' },
    { date: 'Abril/2026', title: 'Fase 1: Liga Regular (4 semanas de operações)' },
    { date: 'Maio/2026', title: 'Análise de Resultados e Seleção dos Finalistas' },
    { date: 'Junho/2026', title: 'Fase 2: Defesas do Investment Case e Premiação' },
  ]

  const faqs = [
    {
      q: 'O dinheiro é real?',
      a: 'Não, usamos um simulador avançado com dinheiro fictício (cada equipe recebe R$ 100.000 virtuais). No entanto, todas as cotações, gráficos e ativos são reais, sincronizados com a B3.',
    },
    {
      q: 'Os alunos precisam de conhecimento prévio de economia?',
      a: 'Não! O projeto é focado no aprendizado contínuo. Fornecemos materiais de apoio robustos, trilhas de conhecimento e suporte para as decisões ao longo da liga.',
    },
    {
      q: 'É necessário já investir para participar?',
      a: 'Não, a liga é formatada inclusive para iniciantes. Por se tratar de um ambiente simulado, os alunos aprendem na prática, sem riscos reais.',
    },
    {
      q: 'Os alunos utilizam dinheiro real?',
      a: 'Não. Todo o capital utilizado (R$ 100.000 iniciais por equipe) é inteiramente virtual e restrito ao simulador do desafio.',
    },
  ]

  return (
    <div className="pt-20 pb-24 bg-background">
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-investor/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div>
            <Badge className="bg-investor/20 text-investor border-investor/30 mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
              Educação Financeira Aplicada
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-normal">
              A geração que já investe.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Um desafio nacional onde estudantes aprendem investimentos na prática através de um
              simulador com ativos reais, ranking ao vivo e desafios estratégicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => openModal('school')}
                size="lg"
                className="bg-investor hover:bg-investor/90 text-navy h-14 px-8 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-all w-full sm:w-auto"
              >
                Realizar Inscrição
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            {/* Abstract representation of charts */}
            <div className="absolute inset-0 bg-gradient-to-tr from-investor/20 to-transparent rounded-2xl border border-investor/30 backdrop-blur-sm p-6 transform rotate-3 scale-105"></div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Patrimônio Virtual da Equipe</p>
                  <p className="text-3xl font-bold font-display">R$ 114.200,00</p>
                </div>
                <Badge className="bg-investor/20 text-investor border-none">+14.2%</Badge>
              </div>
              <div className="h-40 flex items-end gap-2">
                {[40, 45, 30, 60, 55, 75, 65, 85, 90, 80, 100].map((h, i) => (
                  <div key={i} className="w-full bg-investor/20 rounded-t-sm relative group">
                    <div
                      className="absolute bottom-0 w-full bg-investor rounded-t-sm transition-all duration-500"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Como funciona</h2>
            <p className="text-muted-foreground text-lg">
              Um formato engajador e estruturado que combina tomada de decisão sob pressão com
              defesa analítica de portfólio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-card p-8 hover:shadow-lg transition-shadow border-t-4 border-t-investor">
              <div className="mb-6 bg-investor/10 w-16 h-16 rounded-2xl flex items-center justify-center text-investor">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fase 1: Liga Regular</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Durante 4 semanas, as equipes competem em nosso simulador. Cada grupo recebe R$
                100.000 virtuais para montar e gerir sua carteira de investimentos com base em
                ativos reais. A avaliação foca em rentabilidade, qualidade da estratégia e no
                relatório final.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Operações reais sincronizadas à
                  B3
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Ranking ao vivo e dinâmico
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Entrega de Relatório de Gestão
                </li>
              </ul>
            </Card>

            <Card className="border-border bg-card p-8 hover:shadow-lg transition-shadow border-t-4 border-t-investor">
              <div className="mb-6 bg-investor/10 w-16 h-16 rounded-2xl flex items-center justify-center text-investor">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fase 2: Investment Case</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As equipes classificadas recebem um cenário macroeconômico hipotético. O desafio é
                analisar o cenário, construir uma tese de investimentos, estruturar a estratégia e
                defendê-la para uma banca. Importante: Todas as equipes iniciam esta fase em
                igualdade de condições.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Análise de cenário
                  macroeconômico
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Construção de tese de alocação
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Sabatina com profissionais do
                  mercado
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Operacional Escola x Real Grana */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-navy dark:text-white">
              Quanto trabalho a escola terá?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nossa operação centralizada garante que a escola foque apenas no engajamento dos
              alunos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Escola */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-investor/10 text-investor rounded-xl flex items-center justify-center mb-6">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Responsabilidades da Escola</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-investor shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Inscrição institucional na Liga.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-investor shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Definição de um professor ou coordenador responsável.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-investor shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Formação das equipes de alunos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-investor shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Acompanhamento e incentivo à participação.
                    </span>
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                  <Clock className="w-5 h-5 text-investor shrink-0" />
                  <span className="font-semibold text-sm">
                    Tempo do Professor: 1 a 3 horas durante toda a competição.
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Real Grana */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">O que a Real Grana entrega</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Plataforma de ensino e Simulador de Investimentos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Atualização do Ranking nacional em tempo real.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Comunicação direta e materiais de apoio aos alunos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Avaliação técnica das carteiras e teses.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Premiações e certificados aos finalistas.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-bold border-investor text-investor hover:bg-investor hover:text-white"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2 w-5 h-5" />
              BAIXAR REGULAMENTO
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto font-bold bg-investor text-white hover:bg-investor/90"
              onClick={() => openModal('school')}
            >
              <Presentation className="mr-2 w-5 h-5" />
              AGENDAR APRESENTAÇÃO PARA MINHA ESCOLA
            </Button>
          </div>
        </div>
      </section>

      {/* O que os participantes precisarão fazer? */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-navy dark:text-white">
              O que os participantes precisarão fazer?
            </h2>
            <p className="text-muted-foreground text-lg">
              A imersão prática de atuar como verdadeiros gestores de um fundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="bg-investor/10 rounded-3xl p-8 border border-investor/20 flex flex-col items-center text-center order-2 md:order-1">
              <Clock className="w-16 h-16 text-investor mb-6" />
              <h3 className="text-2xl font-bold mb-4">Dedicação dos Alunos</h3>
              <p className="text-muted-foreground mb-6">
                Gerenciar a carteira e acompanhar o mercado exige disciplina, sem sobrecarregar a
                rotina.
              </p>
              <div className="bg-background px-6 py-4 rounded-2xl shadow-sm border border-border w-full">
                <span className="font-display text-2xl font-bold text-investor">1 a 2 horas</span>
                <span className="block text-muted-foreground text-sm mt-1">por semana</span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-sm">
                  <LineChart className="w-6 h-6 text-investor shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Gestão de Carteira</strong>
                    <span className="text-muted-foreground text-sm">
                      Operar no simulador comprando e vendendo ativos com os R$100k virtuais.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-sm">
                  <Globe2 className="w-6 h-6 text-investor shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">
                      Acompanhamento de Notícias
                    </strong>
                    <span className="text-muted-foreground text-sm">
                      Acompanhar fatos relevantes e notícias que afetam o mercado financeiro.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-sm">
                  <BrainCircuit className="w-6 h-6 text-investor shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Tomada de Decisão</strong>
                    <span className="text-muted-foreground text-sm">
                      Debater em equipe as melhores estratégias e movimentar o portfólio.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border shadow-sm">
                  <Presentation className="w-6 h-6 text-investor shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Relatório e Defesa Final</strong>
                    <span className="text-muted-foreground text-sm">
                      Elaborar o relatório de gestão da fase 1 e, se classificados, apresentar a
                      defesa da tese na fase final.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="bg-investor/10 text-investor mb-4">Visão Geral</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Conheça a Investor League
          </h2>

          <div className="aspect-video bg-navy rounded-3xl relative overflow-hidden group cursor-pointer border border-border shadow-2xl flex items-center justify-center">
            <img
              src="https://img.usecurling.com/p/1280/720?q=stock%20market&color=green"
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="relative z-10 w-20 h-20 bg-investor rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* O que os alunos desenvolvem & Cronograma */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              O que os alunos desenvolvem
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-investor/20 flex items-center justify-center group-hover:scale-110 transition-transform text-investor">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-sm md:text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mt-16 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Badge className="bg-investor/20 text-investor border-none text-sm px-4 py-1.5">
                Cronograma 2026
              </Badge>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 relative before:hidden md:before:block before:absolute before:top-5 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
              {schedule.map((item, i) => (
                <div key={i} className="relative flex-1 text-center group">
                  <div className="flex items-center justify-center w-10 h-10 mx-auto rounded-full border border-white/30 bg-navy text-white shadow relative z-10 mb-4 group-hover:scale-110 transition-transform">
                    <Calendar className="w-4 h-4 text-investor" />
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 h-full flex flex-col justify-center">
                    <div className="text-investor font-bold text-sm mb-2">{item.date}</div>
                    <div className="text-slate-300 font-medium text-sm leading-snug">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Pitch */}
      <section className="py-24 relative overflow-hidden border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-investor/20 text-investor border-investor/30 mb-6">
              Para Escolas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Integre a Investor League à sua escola
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Descubra como nossa liga pode se encaixar na sua grade curricular ou atividades
              extracurriculares, desenvolvendo a educação financeira de forma engajadora e prática.
            </p>
            <Button
              onClick={() => openModal('school')}
              size="lg"
              className="bg-investor text-navy hover:bg-investor/90 h-14 px-10 text-lg font-bold rounded-full shadow-lg transition-transform hover:scale-105"
            >
              Realizar Inscrição
            </Button>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes (FAQ) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">Esclareça suas dúvidas sobre a Investor League.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-investor transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
