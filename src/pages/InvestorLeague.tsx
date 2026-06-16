import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import useRegistrationStore from '@/stores/useRegistrationStore'
import {
  LineChart,
  Wallet,
  BarChart3,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Download,
} from 'lucide-react'

export default function InvestorLeague() {
  const { openModal } = useRegistrationStore()

  const skills = [
    'Gestão de risco',
    'Tomada de decisão',
    'Leitura de mercado',
    'Pensamento analítico',
    'Trabalho em equipe',
    'Educação financeira aplicada',
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
      q: 'Como funciona o ranking?',
      a: 'Nosso ranking vai além do retorno absoluto. Ele avalia o retorno ajustado ao risco utilizando o Índice Sharpe, garantindo que boas decisões, e não apenas sorte, sejam premiadas.',
    },
  ]

  return (
    <div className="pt-20 bg-background">
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-investor/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div>
            <Badge className="bg-investor/20 text-investor border-investor/30 mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
              Educação Financeira Aplicada
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
              Um desafio onde os alunos atuam como{' '}
              <span className="text-gradient-investor">gestores de fundos de investimento</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Uma liga nacional onde estudantes aprendem investimentos na prática através de um
              simulador com ativos reais, ranking ao vivo e desafios estratégicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => openModal('school')}
                size="lg"
                className="bg-investor hover:bg-investor/90 text-navy h-14 px-8 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-all w-full sm:w-auto"
              >
                Inscrição
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent h-14 px-8 text-lg rounded-full font-bold w-full sm:w-auto"
              >
                <Download className="mr-2 h-5 w-5" /> Baixar Regulamento
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
                ativos reais.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Operações reais da B3
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Ranking ao vivo e dinâmico
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Avaliação via Índice Sharpe
                  (Risco x Retorno)
                </li>
              </ul>
            </Card>

            <Card className="border-border bg-card p-8 hover:shadow-lg transition-shadow border-t-4 border-t-investor">
              <div className="mb-6 bg-investor/10 w-16 h-16 rounded-2xl flex items-center justify-center text-investor">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fase 2: Investment Case</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As equipes de melhor desempenho avançam para a fase final. Aqui não basta apenas ter
                lucrado; os alunos devem defender sua tese de investimentos para uma banca
                qualificada.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Apresentação da tese de
                  alocação
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-investor" /> Defesa de cenário
                  macroeconômico
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

      {/* O que os alunos desenvolvem & Cronograma */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                O que os alunos desenvolvem
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-investor/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="text-investor w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <Badge className="bg-investor/20 text-investor mb-6 border-none text-sm px-4">
                Cronograma 2026
              </Badge>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {schedule.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-navy text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow relative z-10">
                      <Calendar className="w-4 h-4 text-investor" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-investor font-bold text-sm mb-1">{item.date}</div>
                      <div className="text-slate-300 font-medium">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
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
              Agendar Apresentação
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
