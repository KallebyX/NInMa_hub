import {
  Package,
  FileText,
  Video,
  Calendar,
  TrendingUp,
  Users,
  Award,
  Eye,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

// Mock data - será substituído por dados reais do banco
const stats = [
  {
    name: 'Total de Produtos',
    value: '24',
    change: '+3 este mês',
    icon: Package,
    color: 'text-primary',
    bg: 'bg-primary-100',
  },
  {
    name: 'Artigos Publicados',
    value: '87',
    change: '+12 este ano',
    icon: FileText,
    color: 'text-secondary',
    bg: 'bg-secondary-100',
  },
  {
    name: 'Vídeos',
    value: '45',
    change: '+5 este mês',
    icon: Video,
    color: 'text-accent',
    bg: 'bg-accent-100',
  },
  {
    name: 'Próximos Eventos',
    value: '8',
    change: 'Nos próximos 30 dias',
    icon: Calendar,
    color: 'text-primary',
    bg: 'bg-primary-100',
  },
]

const recentActivity = [
  {
    id: 1,
    action: 'Novo produto adicionado',
    item: 'Sistema de Triagem Neonatal',
    user: 'Maria Silva',
    time: 'Há 2 horas',
  },
  {
    id: 2,
    action: 'Artigo publicado',
    item: 'Impacto da Tecnologia no Cuidado Neonatal',
    user: 'João Santos',
    time: 'Há 5 horas',
  },
  {
    id: 3,
    action: 'Evento atualizado',
    item: 'Simpósio de Inovação 2024',
    user: 'Ana Costa',
    time: 'Ontem',
  },
  {
    id: 4,
    action: 'Vídeo adicionado',
    item: 'Webinar: Tecnologias Emergentes',
    user: 'Pedro Lima',
    time: 'Há 2 dias',
  },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="heading-2 text-gray-900 mb-2">Dashboard</h1>
        <p className="body-normal text-gray-600">
          Visão geral do conteúdo e atividades do NInMa Hub
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.name}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`${stat.bg} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-600 truncate">{activity.item}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Novo Produto', href: '/admin/produtos/novo', icon: Package },
                { name: 'Novo Artigo', href: '/admin/artigos/novo', icon: FileText },
                { name: 'Novo Vídeo', href: '/admin/videos/novo', icon: Video },
                { name: 'Novo Evento', href: '/admin/eventos/novo', icon: Calendar },
              ].map((action) => {
                const Icon = action.icon
                return (
                  <a
                    key={action.name}
                    href={action.href}
                    className="flex flex-col items-center gap-3 p-4 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors group"
                  >
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                      {action.name}
                    </span>
                  </a>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral de Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">12,547</p>
                <p className="text-sm text-gray-600">Visualizações este mês</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-secondary-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3,842</p>
                <p className="text-sm text-gray-600">Visitantes únicos</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-accent-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">+23%</p>
                <p className="text-sm text-gray-600">Crescimento mensal</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
