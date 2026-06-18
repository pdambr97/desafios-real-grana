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
import { useToast } from '@/hooks/use-toast'
import useRegistrationStore from '@/stores/useRegistrationStore'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RegistrationModal() {
  const { isOpen, closeModal, challenge } = useRegistrationStore()
  const [step, setStep] = useState(1)
  const { toast } = useToast()

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setStep(1), 300)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const payload = {
      challenge_type: challenge || 'Geral',
      teamName: formData.get('teamName'),
      teacherName: formData.get('teacherName'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      schoolName: formData.get('schoolName'),
    }

    console.log('Registration Payload:', payload)

    setStep(2) // Success step
    toast({
      title: 'Inscrição recebida!',
      description: 'Em breve entraremos em contato com você.',
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-background">
        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="font-display text-2xl">
              {step === 1 ? 'Inscrição de Equipe' : 'Tudo Certo!'}
            </DialogTitle>
            <DialogDescription>
              {step === 1
                ? 'Preencha os dados abaixo para inscrever sua equipe.'
                : 'Sua jornada está apenas começando.'}
            </DialogDescription>
          </DialogHeader>

          <div className="grid">
            {/* Step 1: Form */}
            <div
              className={cn(
                'col-start-1 row-start-1 transition-all duration-300',
                step === 1
                  ? 'translate-x-0 opacity-100 z-10'
                  : '-translate-x-full opacity-0 pointer-events-none -z-10',
              )}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {challenge && (
                  <div className="bg-muted p-3 rounded-lg text-sm mb-2 text-center text-muted-foreground font-medium border border-border">
                    Desafio selecionado: <strong className="text-foreground">{challenge}</strong>
                  </div>
                )}

                <div className="grid gap-2">
                  <Label htmlFor="teamName">Nome da Equipe</Label>
                  <Input
                    id="teamName"
                    name="teamName"
                    required
                    placeholder="Digite o nome da equipe"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="teacherName">Nome do Professor/Coordenador Responsável</Label>
                  <Input
                    id="teacherName"
                    name="teacherName"
                    required
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">E-mail do Professor/Coordenador Responsável</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="whatsapp">WhatsApp do Professor/Coordenador Responsável</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="schoolName">Nome da Escola</Label>
                  <Input
                    id="schoolName"
                    name="schoolName"
                    required
                    placeholder="Digite o nome da escola"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold/90">
                    Realizar Inscrição
                  </Button>
                </div>
              </form>
            </div>

            {/* Step 2: Success */}
            <div
              className={cn(
                'col-start-1 row-start-1 transition-all duration-300 flex flex-col items-center justify-center py-8 text-center',
                step === 2
                  ? 'translate-x-0 opacity-100 z-10'
                  : 'translate-x-full opacity-0 pointer-events-none -z-10',
              )}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inscrição Confirmada!</h3>
              <p className="text-muted-foreground mb-6">
                Em breve entraremos em contato para verificação e inscrição dos alunos de cada
                equipe
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
