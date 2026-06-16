import { createContext, useContext, useState, ReactNode } from 'react'

export type RegistrationRole = 'school' | 'student' | null

interface RegistrationState {
  isOpen: boolean
  selectedRole: RegistrationRole
  openModal: (role?: RegistrationRole) => void
  closeModal: () => void
  setRole: (role: RegistrationRole) => void
}

const RegistrationContext = createContext<RegistrationState | undefined>(undefined)

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<RegistrationRole>(null)

  const openModal = (role: RegistrationRole = null) => {
    setSelectedRole(role)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // Optional: reset role after close animation
    setTimeout(() => setSelectedRole(null), 300)
  }

  return (
    <RegistrationContext.Provider
      value={{ isOpen, selectedRole, openModal, closeModal, setRole: setSelectedRole }}
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
