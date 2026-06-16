import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import useRegistrationStore from '@/stores/useRegistrationStore'
import { LineChart, Wallet, BarChart3, TrendingUp, GraduationCap, Users } from 'lucide-react'

export default function InvestorLeague() {
  const { openModal } = useRegistrationStore()

  const features = [
    {
      icon: <Wallet className="w-8 h-8 text-investor" />,
      title: 'R$ 100.000 Virtuais',
      desc: 'Cada equipe recebe capital fictício para montar sua carteira do zero.',
    },
    {
      icon: <LineChart className="w-8 h-8 text-investor" />,
      title: 'Market Data Real',
      desc: 'Cotações integradas com ativos reais da B3 (Ações, FIIs e ETFs).',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-investor" />,
      title: 'Análise de Risco',
      desc: 'Ferramentas para entender volatilidade e diversificação na prática.',
    },
  ]

  const mockRanking = [
    { pos: 1, name: 'Alpha Capital (Escola X)', ret: '+14.2%', sharpe: '1.8' },
    { pos: 2, name: 'Beta Investments (Escola Y)', ret: '+12.5%', sharpe: '1.5' },
    { pos: 3, name: 'Gamma Fund (Escola Z)', ret: '+11.8%', sharpe: '1.4' },
    { pos: 4, name: 'Delta Value (Escola W)', ret: '+9.4%', sharpe: '1.1' },
    { pos: 5, name: 'Epsilon Traders (Escola V)', ret: '+8.1%', sharpe: '0.9' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-investor/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div>
            <Badge className="bg-investor/20 text-investor border-investor/30 mb-6 px-4 py-1.5 text-sm uppercase tracking-wider">
              Educação Financeira Aplicada
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
              Aprenda a investir como quem{' '}
              <span className="text-gradient-investor">move o mercado.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              O mundo mudou. Da poupança de 1995 para Pix, Cripto e IA em 2024. A Investor League
              coloca o aluno no assento do gestor de portfólio.
            </p>
            <Button
              onClick={() => openModal()}
              size="lg"
              className="bg-investor hover:bg-investor/90 text-navy h-14 px-8 text-lg rounded-full font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 transition-all"
            >
              Entrar na Liga
            </Button>
          </div>
          <div className="relative hidden md:block">
            {/* Abstract representation of charts */}
            <div className="absolute inset-0 bg-gradient-to-tr from-investor/20 to-transparent rounded-2xl border border-investor/30 backdrop-blur-sm p-6 transform rotate-3 scale-105"></div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Patrimônio Virtual</p>
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

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              O Simualdor Definitivo
            </h2>
            <p className="text-muted-foreground">
              Não é sobre comprar na baixa e vender na alta. É sobre construir teses, analisar
              fundamentos e gerenciar riscos reais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card
                key={i}
                className="border-border bg-muted/20 hover:bg-muted/40 transition-colors text-center p-6 border-t-4 hover:border-t-investor duration-300"
              >
                <div className="mx-auto bg-background w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking & Competition */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="border border-border shadow-xl overflow-hidden">
                <CardHeader className="bg-background border-b border-border pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="text-investor" /> Ranking Nacional (Top 5)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-16 text-center">Pos</TableHead>
                        <TableHead>Equipe</TableHead>
                        <TableHead className="text-right">Retorno</TableHead>
                        <TableHead className="text-right hidden sm:table-cell">
                          Índice Sharpe
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockRanking.map((row) => (
                        <TableRow key={row.pos} className="hover:bg-muted/50">
                          <TableCell className="text-center font-bold">
                            {row.pos === 1 ? (
                              <span className="text-yellow-500">1º</span>
                            ) : (
                              `${row.pos}º`
                            )}
                          </TableCell>
                          <TableCell className="font-medium">{row.name}</TableCell>
                          <TableCell className="text-right text-investor font-bold">
                            {row.ret}
                          </TableCell>
                          <TableCell className="text-right text-muted-foreground hidden sm:table-cell">
                            {row.sharpe}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                A Grande Final: <br />O Investment Case
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                As equipes com os melhores desempenhos (ajustados ao risco) são convidadas para a
                defesa de tese. Não basta ter lucrado; é preciso explicar a estratégia para uma
                banca de profissionais da Faria Lima.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-investor/10 p-2 rounded shrink-0">
                    <GraduationCap className="text-investor" />
                  </div>
                  <div>
                    <h4 className="font-bold">Aprendizado como Investidor</h4>
                    <p className="text-sm text-muted-foreground">
                      Foco em análise de empresas, leitura de cenários macroeconômicos e psicologia
                      do mercado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-investor/10 p-2 rounded shrink-0">
                    <Users className="text-investor" />
                  </div>
                  <div>
                    <h4 className="font-bold">Trabalho em Equipe</h4>
                    <p className="text-sm text-muted-foreground">
                      Decisões tomadas em comitê, simulando o ambiente de uma gestora real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
