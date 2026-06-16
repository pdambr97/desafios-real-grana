import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import useRegistrationStore from '@/stores/useRegistrationStore'
import { Building2, UserRound, ArrowRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RegistrationModal() {
  const { isOpen, closeModal, selectedRole, setRole } = useRegistrationStore()
  const [step, setStep] = useState(1)
  const { toast } = useToast()

  useEffect(() => {
    if (isOpen) {
      setStep(selectedRole ? 2 : 1)
    } else {
      setTimeout(() => setStep(1), 300)
    }
  }, [isOpen, selectedRole])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3) // Success step
    toast({
      title: 'Inscrição recebida!',
      description: 'Enviamos os próximos passos para o seu e-mail.',
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-background">
        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="font-display text-2xl">
              {step === 1
                ? 'Bem-vindo aos Desafios'
                : step === 3
                  ? 'Tudo Certo!'
                  : 'Complete sua Inscrição'}
            </DialogTitle>
            <DialogDescription>
              {step === 1
                ? 'Como você deseja participar da edição deste ano?'
                : step === 3
                  ? 'Sua jornada está apenas começando.'
                  : 'Preencha os dados abaixo para continuar.'}
            </DialogDescription>
          </DialogHeader>

          <div className="relative overflow-hidden min-h-[300px]">
            {/* Step 1: Role Selection */}
            <div
              className={cn(
                'absolute w-full transition-all duration-300',
                step === 1
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0 pointer-events-none',
              )}
            >
              <div className="grid gap-4">
                <button
                  onClick={() => {
                    setRole('school')
                    setStep(2)
                  }}
                  className="flex items-center p-4 border rounded-xl hover:border-gold hover:bg-gold/5 transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-gold/20">
                    <Building2 className="text-primary group-hover:text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sou Escola</h3>
                    <p className="text-sm text-muted-foreground">
                      Professor, Coordenador ou Diretor
                    </p>
                  </div>
                  <ArrowRight className="ml-auto text-muted-foreground group-hover:text-gold" />
                </button>

                <button
                  onClick={() => {
                    setRole('student')
                    setStep(2)
                  }}
                  className="flex items-center p-4 border rounded-xl hover:border-gold hover:bg-gold/5 transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-gold/20">
                    <UserRound className="text-primary group-hover:text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Sou Aluno</h3>
                    <p className="text-sm text-muted-foreground">Estudante ou Responsável</p>
                  </div>
                  <ArrowRight className="ml-auto text-muted-foreground group-hover:text-gold" />
                </button>
              </div>
            </div>

            {/* Step 2: Form */}
            <div
              className={cn(
                'absolute w-full transition-all duration-300',
                step === 2
                  ? 'translate-x-0 opacity-100'
                  : step < 2
                    ? 'translate-x-full opacity-0 pointer-events-none'
                    : '-translate-x-full opacity-0 pointer-events-none',
              )}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" required placeholder="Digite seu nome" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">
                    E-mail {selectedRole === 'school' ? 'Institucional' : ''}
                  </Label>
                  <Input id="email" type="email" required placeholder="seu@email.com" />
                </div>

                {selectedRole === 'school' ? (
                  <>
                    <div className="grid gap-2">
                      <Label htmlFor="cnpj">CNPJ da Escola</Label>
                      <Input id="cnpj" required placeholder="00.000.000/0000-00" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="students">Estimativa de Alunos</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-50">10 a 50 alunos</SelectItem>
                          <SelectItem value="51-200">51 a 200 alunos</SelectItem>
                          <SelectItem value="201+">Mais de 200 alunos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid gap-2">
                      <Label htmlFor="schoolName">Nome da Escola</Label>
                      <Input id="schoolName" required placeholder="Onde você estuda?" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="grade">Série/Ano</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione sua série" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="f2">Ensino Fundamental II</SelectItem>
                          <SelectItem value="em1">1º Ano Médio</SelectItem>
                          <SelectItem value="em2">2º Ano Médio</SelectItem>
                          <SelectItem value="em3">3º Ano Médio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-full"
                  >
                    Voltar
                  </Button>
                  <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90">
                    Finalizar Inscrição
                  </Button>
                </div>
              </form>
            </div>

            {/* Step 3: Success */}
            <div
              className={cn(
                'absolute w-full transition-all duration-300 flex flex-col items-center justify-center py-8 text-center',
                step === 3
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0 pointer-events-none',
              )}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inscrição Confirmada!</h3>
              <p className="text-muted-foreground mb-6">
                Você receberá um e-mail com as próximas instruções em breve.
              </p>
              <Button onClick={closeModal} className="w-full">
                Voltar ao portal
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
