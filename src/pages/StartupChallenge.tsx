import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import useRegistrationStore from '@/stores/useRegistrationStore'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Play,
  Lightbulb,
  Users,
  Bot,
  Presentation,
  Download,
  Calendar,
  CheckCircle2,
  Clock,
  Building,
} from 'lucide-react'

export default function StartupChallenge() {
  const { openModal } = useRegistrationStore()

  const steps = [
    {
      title: 'Etapa 1: Problema e oportunidade',
      desc: 'Identificação de um problema real e validação da oportunidade.',
    },
    {
      title: 'Etapa 2: Modelo de negócio',
      desc: 'Estruturação da proposta de valor, público-alvo e viabilidade financeira.',
    },
    {
      title: 'Etapa 3: Mentoria',
      desc: 'Sessão obrigatória com especialistas para revisão do projeto.',
    },
    {
      title: 'Etapa 4: Bootcamp de IA',
      desc: 'Construção do protótipo navegável utilizando ferramentas de inteligência artificial indicadas pela organização.',
    },
    {
      title: 'Etapa 5: Pitch Final',
      desc: 'Apresentação ao vivo para banca avaliadora.',
    },
  ]

  const rewards = [
    'Certificado nacional',
    'Experiência prática',
    'Portfólio acadêmico',
    'Soft skills',
    'IA aplicada',
    'Reconhecimento nacional',
  ]

  const schedule = [
    { date: 'Agosto/2026', title: 'Abertura das inscrições e formação das equipes' },
    { date: 'Setembro/2026', title: 'Etapas 1 e 2: Problema e Modelo de Negócio' },
    { date: 'Outubro/2026', title: 'Sessões de Mentoria e Bootcamp de IA' },
    { date: 'Novembro/2026', title: 'Pitch Final, Defesas e Premiação Nacional' },
  ]

  const faqs = [
    {
      q: 'Qual a idade para participar?',
      a: 'O desafio é destinado primariamente a alunos do Ensino Fundamental II e Ensino Médio.',
    },
    {
      q: 'A escola precisa pagar alguma taxa?',
      a: 'Consulte nossa equipe comercial agendando uma apresentação para entender os pacotes institucionais e condições para escolas públicas.',
    },
    {
      q: 'Precisa saber programar?',
      a: 'Não! O foco é inteiramente no modelo de negócios, validação e estratégia. Usamos intensivamente ferramentas No-Code e IA para prototipagem.',
    },
    {
      q: 'E se houver conflito entre integrantes da equipe?',
      a: 'Incentivamos a resolução interna de conflitos como parte do aprendizado. Mudanças na composição da equipe são restritas e avaliadas caso a caso pela organização.',
    },
  ]

  return (
    <div className="pt-20 pb-24 bg-background">
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-startup/20 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <Badge className="bg-startup/20 text-startup border-startup/30 mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
            Inovação & Empreendedorismo
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight max-w-5xl mx-auto">
            A geração que já inova.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            A competição mais inovadora de empreendedorismo. O Startup Challenge desafia estudantes
            à identificarem problemas reais, criarem soluções inovadoras, validando as ideias com
            uma banca avaliadora.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={() => openModal('school', 'Startup Challenge')}
              size="lg"
              className="w-full sm:w-auto bg-startup hover:bg-startup/90 text-white h-14 px-8 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 transition-all"
            >
              Realizar Inscrição
            </Button>
          </div>
        </div>
      </section>

      {/* Como funciona o desafio */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-navy dark:text-white">
              Como funciona o desafio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Uma jornada acadêmica rigorosa e prática, estruturada em 5 etapas fundamentais para a
              formação de um projeto viável.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex items-center justify-between group mb-12 last:mb-0 animate-fade-in-up ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Desktop Spacer */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Marker */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-startup -translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                  <span className="text-startup font-bold text-sm">{i + 1}</span>
                </div>

                {/* Content */}
                <div className="w-full md:w-[45%] pl-20 md:pl-0">
                  <Card className="border border-border hover:border-startup/50 transition-colors shadow-sm hover:shadow-md bg-card">
                    <CardContent className="p-8 text-left">
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
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
              Nós sabemos que a rotina escolar é corrida. Por isso, estruturamos o desafio para ser
              o mais fluido possível.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Escola */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-startup/10 text-startup rounded-xl flex items-center justify-center mb-6">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Responsabilidades da Escola</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-startup shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Inscrição institucional.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-startup shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Definição do professor responsável.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-startup shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Formação das equipes e incentivo aos alunos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-startup shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Apoio e disponibilização de espaço para o Pitch (se aplicável).
                    </span>
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
                  <Clock className="w-5 h-5 text-startup shrink-0" />
                  <span className="font-semibold text-sm">
                    Tempo do Professor: 2 a 4 horas ao longo de toda a competição.
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Real Grana */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">O que a Real Grana entrega</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Regulamentos e trilhas de conhecimento prontas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Plataforma e ferramentas de IA.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Sessões de mentoria com especialistas do mercado.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Comunicação e suporte contínuo às equipes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Avaliações profissionais e premiações.
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
              className="w-full sm:w-auto font-bold border-startup text-startup hover:bg-startup hover:text-white"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2 w-5 h-5" />
              BAIXAR REGULAMENTO
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto font-bold bg-startup text-white hover:bg-startup/90"
              onClick={() =>
                window.open(
                  'https://wa.me/5511973408493?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20desafios',
                  '_blank',
                )
              }
            >
              <Presentation className="mr-2 w-5 h-5" />
              AGENDAR APRESENTAÇÃO PARA MINHA ESCOLA
            </Button>
          </div>
        </div>
      </section>

      {/* O que esperamos dos participantes? */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-navy dark:text-white">
              O que esperamos dos participantes?
            </h2>
            <p className="text-muted-foreground text-lg">
              Os alunos serão os protagonistas da sua própria jornada de inovação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                  <Users className="w-6 h-6 text-startup shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Trabalho em Equipe</strong>
                    <span className="text-muted-foreground text-sm">
                      Colaboração ativa e divisão de tarefas entre os membros do grupo.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                  <Lightbulb className="w-6 h-6 text-startup shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">
                      Desenvolvimento do Projeto
                    </strong>
                    <span className="text-muted-foreground text-sm">
                      Pesquisa de mercado, estruturação da ideia e validação da oportunidade.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                  <Bot className="w-6 h-6 text-startup shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">
                      Construção do Protótipo (Bootcamp IA)
                    </strong>
                    <span className="text-muted-foreground text-sm">
                      Participação nas dinâmicas de IA para construir protótipos funcionais.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                  <Presentation className="w-6 h-6 text-startup shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-foreground mb-1">Mentorias e Pitch</strong>
                    <span className="text-muted-foreground text-sm">
                      Participação nas mentorias obrigatórias e preparação intensa para a
                      apresentação final.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-startup/10 rounded-3xl p-8 border border-startup/20 flex flex-col items-center text-center">
              <Clock className="w-16 h-16 text-startup mb-6" />
              <h3 className="text-2xl font-bold mb-4">Dedicação dos Alunos</h3>
              <p className="text-muted-foreground mb-6">
                Para que o projeto atinja o nível de excelência esperado pelas bancas investidoras.
              </p>
              <div className="bg-background px-6 py-4 rounded-2xl shadow-sm border border-border w-full">
                <span className="font-display text-2xl font-bold text-startup">2 a 3 horas</span>
                <span className="block text-muted-foreground text-sm mt-1">por semana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Badge className="bg-startup/10 text-startup mb-4">Visão Geral</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Entenda o Startup Challenge em 2 minutos
          </h2>

          <div className="aspect-video bg-navy rounded-3xl relative overflow-hidden group cursor-pointer border border-border shadow-2xl flex items-center justify-center">
            <img
              src="https://img.usecurling.com/p/1280/720?q=students%20presentation&color=purple"
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="relative z-10 w-20 h-20 bg-startup rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(124,58,237,0.5)] group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Cronograma 2026 */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <Badge className="bg-startup/10 text-startup mb-4">Agenda Oficial</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Cronograma 2026</h2>
              <p className="text-muted-foreground mb-8">
                As datas e marcos do desafio para que a escola possa planejar a integração na grade
                curricular ou atividades extracurriculares.
              </p>
            </div>
            <div className="md:w-2/3 w-full grid sm:grid-cols-2 gap-6">
              {schedule.map((item, i) => (
                <div key={i} className="bg-muted/40 p-6 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-3 text-startup font-bold">
                    <Calendar className="w-5 h-5" />
                    {item.date}
                  </div>
                  <p className="text-foreground font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que os participantes levam & Hook */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Sua escola na vanguarda da <span className="text-gradient-startup">inovação.</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ao participar do Startup Challenge, a instituição não apenas engaja os alunos, mas
                cria um ecossistema interno de empreendedorismo que moderniza a grade curricular de
                forma prática.
              </p>
              <Button
                onClick={() => openModal('school', 'Startup Challenge')}
                size="lg"
                className="bg-startup text-white hover:bg-startup/90 h-14 px-8 rounded-full font-bold transition-all w-full sm:w-auto"
              >
                Realizar Inscrição
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">O que os participantes levam:</h3>
              <div className="grid grid-cols-2 gap-4">
                {rewards.map((reward, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="text-startup w-5 h-5 shrink-0" />
                    <span className="font-medium text-sm md:text-base">{reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes (FAQ) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">
              Tudo o que você precisa saber sobre o Startup Challenge.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-startup transition-colors">
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
