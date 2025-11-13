'use client'

import { signOut, useSession } from 'next-auth/react'
import { LogOut, User } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function AdminHeader() {
  const { data: session } = useSession()

  return (
    <header className="bg-white border-b border-gray-200 h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="heading-4 text-gray-900">Painel Administrativo</h1>
        <p className="text-sm text-gray-600">Bem-vindo, {session?.user?.name}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg">
          <User className="w-5 h-5 text-gray-600" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-medium text-gray-900">{session?.user?.name}</p>
            <p className="text-gray-600">{session?.user?.email}</p>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="group"
        >
          <LogOut className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          Sair
        </Button>
      </div>
    </header>
  )
}
