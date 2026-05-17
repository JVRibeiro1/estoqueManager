import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/produtos')({
  component: ProdutosComponent,
})

function ProdutosComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Produtos</h1>
        <p className="text-slate-500">Gerencie o catálogo e os níveis de estoque dos seus itens.</p>
      </div>
      
      {/* Aqui vai entrar nossa tabela do shadcn em breve */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
        <p className="text-sm text-slate-500">Área da tabela de produtos mocados...</p>
      </div>
    </div>
  )
}