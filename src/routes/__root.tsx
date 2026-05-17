import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Sidebar } from '../components/Sidebar' // 👈 Importamos nossa Sidebar

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'StockManager - Controle de Estoque' }, // 👈 Atualizei o título do seu sistema
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning> {/* 👈 Ajustado para português */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-[rgba(79,184,178,0.24)]">
        
        {/* Envelopamos o conteúdo em um container flexbox para alinhar a Sidebar com as páginas */}
        <div className="flex min-h-screen">
          
          {/* 1. Menu Lateral Fixo */}
          <Sidebar />

          {/* 2. Área do Conteúdo Principal da Página */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children} {/* Aqui o TanStack vai renderizar a página atual (Home, Produtos, etc.) */}
          </main>

        </div>

        {/* Ferramentas de Desenvolvimento do TanStack (DevTools) */}
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}