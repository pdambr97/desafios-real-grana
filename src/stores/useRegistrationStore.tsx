import { createContext, useContext, useState, ReactNode } from 'react'

export type RegistrationRole = 'school' | 'student' | null
export type ChallengeType = 'Startup Challenge' | 'Investor League' | null

interface RegistrationState {
  isOpen: boolean
  selectedRole: RegistrationRole
  challenge: ChallengeType
  openModal: (role?: RegistrationRole, challenge?: ChallengeType) => void
  closeModal: () => void
  setRole: (role: RegistrationRole) => void
}

const RegistrationContext = createContext<RegistrationState | undefined>(undefined)

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<RegistrationRole>(null)
  const [challenge, setChallenge] = useState<ChallengeType>(null)

  const openModal = (role: RegistrationRole = null, challenge: ChallengeType = null) => {
    setSelectedRole(role)
    setChallenge(challenge)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // Optional: reset role after close animation
    setTimeout(() => {
      setSelectedRole(null)
      setChallenge(null)
    }, 300)
  }

  return (
    <RegistrationContext.Provider
      value={{ isOpen, selectedRole, challenge, openModal, closeModal, setRole: setSelectedRole }}
    >
      {children}
    </RegistrationContext.Provider>
  )
}

export default function useRegistrationStore() {
  const context = useContext(RegistrationContext)
  if (!context) {
    throw new Error('useRegistrationStore must be used within a RegistrationProvider')
  }
  return context
}
