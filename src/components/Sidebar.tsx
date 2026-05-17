import { Link } from '@tanstack/react-router'
import { Package, LayoutDashboard, ArrowLeftRight } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-100 min-h-screen flex flex-col border-r border-slate-800">
      {/* Header do Sistema */}
      <div className="p-6 border-b border-slate-800 flex items-center gap-2">
        <Package className="h-6 w-6 text-emerald-400" />
        <span className="font-bold text-lg tracking-wider">StockManager</span>
      </div>

      {/* Links de Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        <Link 
          to="/" 
          activeProps={{ className: "bg-slate-800 text-emerald-400" }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors group text-sm font-medium"
        >
          <LayoutDashboard className="h-5 w-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          Dashboard
        </Link>

        <Link 
          to="/produtos" 
          activeProps={{ className: "bg-slate-800 text-emerald-400" }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors group text-sm font-medium"
        >
          <Package className="h-5 w-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          Produtos
        </Link>

        {/* <Link 
          to="/movimentacoes" 
          activeProps={{ className: "bg-slate-800 text-emerald-400" }}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors group text-sm font-medium"
        >
          <ArrowLeftRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          Movimentações
        </Link> */}
      </nav>

      {/* Footer do Painel */}
      <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
        v1.0.0 - Painel de Controle
      </div>
    </aside>
  )
}