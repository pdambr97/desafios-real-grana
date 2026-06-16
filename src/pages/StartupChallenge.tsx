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
  Lightbulb,
  Users,
  Bot,
  Briefcase,
  Award,
  Presentation,
  Rocket,
  Download,
  Calendar,
  CheckCircle2,
} from 'lucide-react'

export default function StartupChallenge() {
  const { openModal } = useRegistrationStore()

  const steps = [
    {
      title: 'Etapa 1: Problema + oportunidade',
      desc: 'Equipes identificam um problema real na sociedade e começam a construir a solução validada.',
    },
    {
      title: 'Etapa 2: Modelo de negócio',
      desc: 'Definição do público-alvo, elaboração da proposta de valor e verificação da viabilidade financeira.',
    },
    {
      title: 'Etapa 3: Sessão de mentoria',
      desc: 'Revisão estratégica detalhada e feedbacks com os mentores especializados da Real Grana.',
    },
    {
      title: 'Etapa 4: Bootcamp de IA',
      desc: 'Uso avançado de ferramentas de Inteligência Artificial para criar protótipos rápidos, apresentações e identidade visual.',
    },
    {
      title: 'Etapa 5: Pitch Final',
      desc: 'Apresentação final (Pitch) estruturada para uma banca avaliadora composta por investidores do mercado.',
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
  ]

  return (
    <div className="pt-20 bg-background">
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-startup/20 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <Badge className="bg-startup/20 text-startup border-startup/30 mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
            Inovação & Empreendedorismo
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
            A geração que <span className="text-gradient-startup">já inova.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mais do que uma feira de ciências. Um desafio focado em criar soluções escaláveis,
            modelos de negócio reais e habilidades para o século XXI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={() => openModal('school')}
              size="lg"
              className="w-full sm:w-auto bg-startup hover:bg-startup/90 text-white h-14 px-8 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 transition-all"
            >
              Agendar apresentação para minha escola
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 bg-transparent h-14 px-8 text-lg rounded-full font-bold"
            >
              <Download className="mr-2 h-5 w-5" /> Baixar Regulamento
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
                onClick={() => openModal('school')}
                size="lg"
                className="bg-startup text-white hover:bg-startup/90 h-14 px-8 rounded-full font-bold transition-all w-full sm:w-auto"
              >
                Trazer para minha escola
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
