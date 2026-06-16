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
  Gamepad2,
  BrainCircuit,
  Target,
  Users,
  Zap,
  MessageSquare,
  Shield,
  Download,
  Calendar,
} from 'lucide-react'

export default function XpArena() {
  const { openModal } = useRegistrationStore()

  const skills = [
    { icon: <Users />, name: 'Liderança', desc: 'Guiar equipes sob alta pressão.' },
    { icon: <BrainCircuit />, name: 'Estratégia', desc: 'Pensamento analítico a longo prazo.' },
    { icon: <Target />, name: 'Foco', desc: 'Gestão de atenção e concentração sustentada.' },
    { icon: <MessageSquare />, name: 'Comunicação', desc: 'Clareza em momentos críticos.' },
    { icon: <Shield />, name: 'Resiliência', desc: 'Recuperação emocional pós-falha.' },
    { icon: <Zap />, name: 'Decisão Rápida', desc: 'Análise de cenário em milissegundos.' },
  ]

  const schedule = [
    { date: 'Agosto/2026', title: 'Seletivas Escolares Internas' },
    { date: 'Setembro/2026', title: 'Fase de Grupos Nacional' },
    { date: 'Outubro/2026', title: 'Playoffs e Quartas de Final' },
    { date: 'Novembro/2026', title: 'Grande Final Presencial e Premiação' },
  ]

  const faqs = [
    {
      q: 'Os jogos atrapalham os estudos?',
      a: 'Pelo contrário. O projeto é desenhado como atividade extracurricular com regras rígidas de rendimento escolar para participar, usando a competição como ferramenta de engajamento acadêmico.',
    },
    {
      q: 'Quais os equipamentos necessários pela escola?',
      a: 'Depende da modalidade escolhida. Para Clash Royale, basta que os alunos tenham seus celulares. Para Valorant, os alunos podem competir de casa, sem onerar a infraestrutura da escola.',
    },
    {
      q: 'Há moderação e acompanhamento dos jogos?',
      a: 'Sim! Todos os ambientes competitivos oficiais são rigorosamente monitorados por nossa equipe para garantir o fair play, o respeito mútuo e a segurança digital.',
    },
  ]

  return (
    <div className="pt-20 bg-[#0c0c14] min-h-screen text-slate-200">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=esports%20stadium&color=black')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <Badge className="bg-xp/20 text-xp border-xp/30 mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
            Competição Escolar Oficial
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase tracking-tight">
            XP <span className="text-gradient-xp">Arena</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Onde o eSport encontra o desenvolvimento educacional. Campeonatos estruturados para
            extrair e desenvolver as soft skills essenciais exigidas no século XXI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => openModal('school')}
              size="lg"
              className="bg-xp hover:bg-xp/90 text-white h-14 px-8 text-lg rounded-none font-bold uppercase tracking-wider skew-x-[-10deg] shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-all"
            >
              <span className="skew-x-[10deg]">Inscrição</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-none font-bold uppercase tracking-wider skew-x-[-10deg] bg-transparent"
            >
              <span className="skew-x-[10deg] flex items-center">
                <Download className="mr-2 h-5 w-5" /> Baixar Regulamento
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* The Games */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase">
              Modalidades Oficiais
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cada jogo é uma ferramenta estratégica diferente para desenvolvimento de habilidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Clash Royale Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-8">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gamepad2 className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
                  Mobile / Individual
                </Badge>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Clash Royale</h3>
                <p className="text-slate-400 mb-6">
                  Xadrez em tempo real. Uma batalha mental de 3 minutos onde cada gota de elixir e
                  cada decisão estratégica conta.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full shadow-[0_0_8px_var(--tw-colors-xp)]"></div>
                    Gestão de Recursos
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full shadow-[0_0_8px_var(--tw-colors-xp)]"></div>
                    Análise de Risco
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full shadow-[0_0_8px_var(--tw-colors-xp)]"></div>
                    Tomada de Decisão sob Pressão
                  </div>
                </div>
              </div>
            </div>

            {/* Valorant Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-8">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-4">
                  PC / Equipe 5v5
                </Badge>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Valorant</h3>
                <p className="text-slate-400 mb-6">
                  O esporte coletivo digital definitivo. Requer sinergia de equipe inabalável e
                  execução tática milimétrica.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full shadow-[0_0_8px_var(--tw-colors-xp)]"></div>
                    Liderança de Equipe (IGL)
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full shadow-[0_0_8px_var(--tw-colors-xp)]"></div>
                    Comunicação Eficiente
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full shadow-[0_0_8px_var(--tw-colors-xp)]"></div>
                    Execução Estratégica Conjunta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invisible Curriculum */}
      <section className="py-24 bg-black/50 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase">
              O Currículo Invisível
            </h2>
            <p className="text-slate-400 text-lg">
              Por trás da tela e dos reflexos rápidos, os alunos desenvolvem as habilidades
              comportamentais mais exigidas pelas grandes empresas hoje.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <Card
                key={i}
                className="bg-white/5 border-white/10 hover:border-xp/50 transition-all hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="text-xp mb-6 w-16 h-16 rounded-full bg-xp/10 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-white mb-3 text-xl">{skill.name}</h4>
                  <p className="text-sm text-slate-400">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cronograma Oficial */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 uppercase">
            Cronograma Completo 2026
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {schedule.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-xp/30 transition-colors text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-xp transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <div className="flex items-center gap-2 text-xp mb-4 font-bold">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h4 className="text-white font-medium text-lg leading-tight">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes (FAQ) */}
      <section className="py-24 bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 uppercase text-white">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-400">Esclareça suas dúvidas sobre o formato da XP Arena.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left font-bold text-lg text-slate-200 hover:text-xp transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* School Pitch */}
      <section className="py-24 relative overflow-hidden border-t border-white/10 bg-gradient-to-t from-xp/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-white/10 text-white mb-6">Para Diretores e Mantenedores</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">
              A chave para <span className="text-xp">retenção e engajamento.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Ignorar os eSports é afastar a escola do ecossistema e da linguagem nativa do aluno. A
              XP Arena oferece um ambiente controlado, institucional e focado no desenvolvimento
              saudável, transformando horas de lazer em uma atividade extracurricular de altíssimo
              impacto educacional.
            </p>
            <Button
              onClick={() => openModal('school')}
              size="lg"
              className="bg-xp text-white hover:bg-xp/90 h-16 px-10 text-lg font-bold uppercase tracking-wider rounded-none skew-x-[-10deg] shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-transform hover:scale-105"
            >
              <span className="skew-x-[10deg]">Agendar Apresentação</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
