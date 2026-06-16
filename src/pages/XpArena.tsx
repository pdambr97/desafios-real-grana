import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import useRegistrationStore from '@/stores/useRegistrationStore'
import { Gamepad2, BrainCircuit, Target, Users, Zap, MessageSquare, Shield } from 'lucide-react'

export default function XpArena() {
  const { openModal } = useRegistrationStore()

  const skills = [
    { icon: <Users />, name: 'Liderança', desc: 'Guiar equipes sob pressão' },
    { icon: <BrainCircuit />, name: 'Estratégia', desc: 'Pensamento a longo prazo' },
    { icon: <Target />, name: 'Foco', desc: 'Gestão de atenção' },
    { icon: <MessageSquare />, name: 'Comunicação', desc: 'Clareza em momentos críticos' },
    { icon: <Shield />, name: 'Resiliência', desc: 'Recuperação pós-falha' },
    { icon: <Zap />, name: 'Decisão Rápida', desc: 'Análise de cenário em MS' },
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
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Onde o eSport encontra o desenvolvimento educacional. Campeonatos estruturados para
            extrair e desenvolver as soft skills essenciais.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => openModal()}
              size="lg"
              className="bg-xp hover:bg-xp/90 text-white h-14 px-8 text-lg rounded-none font-bold uppercase tracking-wider skew-x-[-10deg] shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-all"
            >
              <span className="skew-x-[10deg]">Registrar Escola</span>
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
            <p className="text-slate-400">
              Cada jogo é uma ferramenta diferente para desenvolvimento de habilidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Clash Royale Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Gamepad2 className="w-32 h-32" />
              </div>
              <div className="p-8 relative z-10">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
                  Mobile / Individual
                </Badge>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Clash Royale</h3>
                <p className="text-slate-400 mb-6">
                  Xadrez em tempo real. Uma batalha mental de 3 minutos onde cada gota de elixir
                  conta.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full"></div>Gestão de Recursos
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full"></div>Análise de Risco
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full"></div>Tomada de Decisão sob Pressão
                  </div>
                </div>
              </div>
            </div>

            {/* Valorant Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-32 h-32" />
              </div>
              <div className="p-8 relative z-10">
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-4">
                  PC / Equipe 5v5
                </Badge>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Valorant</h3>
                <p className="text-slate-400 mb-6">
                  O esporte coletivo digital definitivo. Sinergia de equipe e execução tática
                  milimétrica.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full"></div>Liderança de Equipe (IGL)
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full"></div>Comunicação Eficiente
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-xp rounded-full"></div>Execução Estratégica Conjunta
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              O Currículo Invisível
            </h2>
            <p className="text-slate-400 text-lg">
              Por trás da tela e dos reflexos rápidos, os alunos desenvolvem as habilidades
              comportamentais mais exigidas pelas grandes empresas hoje.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <Card
                key={i}
                className="bg-white/5 border-white/10 hover:border-xp/50 transition-colors"
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="text-xp mb-4 w-12 h-12 rounded-full bg-xp/10 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{skill.name}</h4>
                  <p className="text-sm text-slate-400">{skill.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School Pitch */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="bg-white/10 text-white mb-6">Para Diretores e Mantenedores</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              A chave para <span className="text-xp">retenção e engajamento.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Ignorar os eSports é afastar a escola do ecossistema do aluno. A XP Arena oferece um
              ambiente controlado, institucional e focado no desenvolvimento saudável, transformando
              horas de lazer em uma atividade extracurricular de alto impacto.
            </p>
            <Button
              onClick={() => openModal('school')}
              variant="outline"
              className="border-xp text-xp hover:bg-xp hover:text-white h-12 px-8 font-bold uppercase tracking-wider rounded-none skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg]">Agendar Apresentação Escolar</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
