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
import { supabase } from '@/lib/supabase/client'

export function MeetingModal() {
  const { isMeetingModalOpen, closeMeetingModal } = useRegistrationStore()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (!isMeetingModalOpen) {
      setTimeout(() => setStep(1), 300)
    }
  }, [isMeetingModalOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)

    const leadPayload = {
      full_name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      school_name: formData.get('schoolName') as string,
      status: 'new',
    }

    try {
      const { error } = await supabase.from('leads').insert([leadPayload])

      if (error) throw error

      setStep(2)
      toast({
        title: 'Solicitação recebida!',
        description: 'Em breve entraremos em contato para agendar nossa reunião.',
      })
    } catch (error) {
      console.error('Error submitting lead:', error)
      toast({
        title: 'Erro',
        description: 'Não foi possível enviar seus dados. Tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isMeetingModalOpen} onOpenChange={(open) => !open && closeMeetingModal()}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-background">
        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="font-display text-2xl">
              {step === 1 ? 'Agendar Reunião' : 'Tudo Certo!'}
            </DialogTitle>
            <DialogDescription>
              {step === 1
                ? 'Preencha os dados abaixo para que possamos agendar uma reunião.'
                : 'Sua solicitação foi enviada com sucesso.'}
            </DialogDescription>
          </DialogHeader>

          <div className="grid">
            <div
              className={cn(
                'col-start-1 row-start-1 transition-all duration-300',
                step === 1
                  ? 'translate-x-0 opacity-100 z-10'
                  : '-translate-x-full opacity-0 pointer-events-none -z-10',
              )}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">E-mail Corporativo/Profissional</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@escola.com.br"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="schoolName">Nome da Instituição</Label>
                  <Input
                    id="schoolName"
                    name="schoolName"
                    required
                    placeholder="Digite o nome da escola"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold text-navy hover:bg-gold/90"
                  >
                    {loading ? 'Enviando...' : 'Solicitar Agendamento'}
                  </Button>
                </div>
              </form>
            </div>

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
              <h3 className="text-xl font-semibold mb-2">Solicitação Confirmada!</h3>
              <p className="text-muted-foreground mb-6">
                Em breve um de nossos especialistas entrará em contato para agendar o melhor
                horário.
              </p>
              <Button onClick={closeMeetingModal} className="w-full">
                Voltar ao portal
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
