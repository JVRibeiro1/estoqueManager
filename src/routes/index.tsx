import { createFileRoute, Link } from '@tanstack/react-router'
import { Package, ArrowLeftRight, TrendingUp } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: DashboardComponent,
})

function DashboardComponent() {
  return (
    <div className="space-y-8">
      {/* Header de Boas-vindas */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Bem-vindo ao StockManager. Aqui está o resumo do seu estoque hoje.</p>
      </div>

      {/* Grid de Cards de Resumo Rápido */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Card 1 - Total de Itens */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
            <Package className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total de Produtos</p>
            <h3 className="text-2xl font-bold text-slate-900">--</h3>
          </div>
        </div>

        {/* Card 2 - Movimentações do Dia */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
            <ArrowLeftRight className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Movimentações (Hoje)</p>
            <h3 className="text-2xl font-bold text-slate-900">--</h3>
          </div>
        </div>

        {/* Card 3 - Alertas de Estoque Baixo */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 rounded-lg text-amber-600">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Alertas de Estoque Baixo</p>
            <h3 className="text-2xl font-bold text-slate-1000 text-amber-600 font-bold">0</h3>
          </div>
        </div>
      </div>

      {/* Seção Informativa Provisória */}
      <div className="p-8 bg-slate-900 text-slate-100 rounded-2xl flex flex-col items-center text-center space-y-4 shadow-md">
        <h2 className="text-xl font-semibold">Pronto para começar?</h2>
        <p className="text-slate-400 max-w-md text-sm">
          A estrutura base do front-end está montada. Agora vamos avançar para a listagem real de produtos simulando nossa API.
        </p>
        <Link 
          to="/produtos"
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium text-sm rounded-lg transition-colors"
        >
          Ir para Catálogo de Produtos
        </Link>
      </div>
    </div>
  )
}