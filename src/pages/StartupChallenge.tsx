import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import useRegistrationStore from '@/stores/useRegistrationStore'
import {
  Lightbulb,
  Users,
  Bot,
  Briefcase,
  Award,
  Presentation,
  Rocket,
  ChevronRight,
} from 'lucide-react'

export default function StartupChallenge() {
  const { openModal } = useRegistrationStore()

  const timeline = [
    {
      title: 'Identificar problema',
      desc: 'Encontre uma dor real na sociedade e estude o mercado.',
    },
    {
      title: 'Validar oportunidade',
      desc: 'Converse com potenciais clientes e entenda a viabilidade.',
    },
    { title: 'Criar solução', desc: 'Prototipar a ideia usando ferramentas no-code e IA.' },
    { title: 'Modelo de negócio', desc: 'Como monetizar? Estruture custos, receitas e canais.' },
    { title: 'Pitch para banca', desc: 'Apresente para investidores reais na grande final.' },
  ]

  const rewards = [
    {
      icon: <Briefcase />,
      title: 'Portfólio Real',
      desc: 'Saia com um projeto completo para apresentar ao mercado.',
    },
    {
      icon: <Award />,
      title: 'Visibilidade',
      desc: 'Destaque nacional para os melhores projetos e escolas.',
    },
    {
      icon: <Users />,
      title: 'Mentoria',
      desc: 'Acesso a profissionais do ecossistema de startups.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-startup/20 blur-[100px] pointer-events-none rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <Badge className="bg-startup/20 text-startup border-startup/30 mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
            Inovação & Empreendedorismo
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
            A geração que <span className="text-gradient-startup">já inova.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Mais do que uma feira de ciências. Um desafio focado em criar soluções escaláveis,
            modelos de negócio reais e habilidades para o século XXI.
          </p>
          <Button
            onClick={() => openModal()}
            size="lg"
            className="bg-startup hover:bg-startup/90 text-white h-14 px-8 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:scale-105 transition-all"
          >
            Inscrever Equipe
          </Button>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-startup/10 p-3 rounded-lg">
                  <Users className="text-startup w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Equipes</p>
                  <p className="font-bold text-lg">3 a 5 alunos</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-startup/10 p-3 rounded-lg">
                  <Lightbulb className="text-startup w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Elegibilidade</p>
                  <p className="font-bold text-lg">Fund. II e Ensino Médio</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-startup/10 p-3 rounded-lg">
                  <Bot className="text-startup w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Ferramentas</p>
                  <p className="font-bold text-lg">Uso livre de IA e No-Code</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              A Jornada do Fundador
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Como transformamos uma ideia de corredor em uma startup pronta para receber
              investimento.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

            {timeline.map((step, i) => (
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="hidden md:block w-5/12"></div>

                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-startup -translate-x-1/2 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-startup"></div>
                </div>

                <div className="w-full md:w-5/12 pl-20 md:pl-0">
                  <Card className="border border-border hover:border-startup/50 transition-colors shadow-sm hover:shadow-md">
                    <CardContent className="p-6">
                      <span className="text-startup font-bold text-sm mb-2 block">
                        Fase 0{i + 1}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards & Hook */}
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
                variant="outline"
                className="border-startup text-startup hover:bg-startup hover:text-white h-12 px-6 rounded-full font-semibold transition-all"
              >
                Trazer para minha escola
              </Button>
            </div>

            <div className="grid gap-6">
              {rewards.map((reward, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-startup/20 flex items-center justify-center shrink-0 text-startup">
                    {reward.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reward.title}</h4>
                    <p className="text-gray-400 text-sm">{reward.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
