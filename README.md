## Site de Portfólio

Um site de portfólio pessoal e currículo projetado, construído com Next.js, React e Tailwind CSS. Possui um tema escuro, design responsivo e componentes interativos.

### Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [Visual Studio Code](https://code.visualstudio.com/)
- Git (for version control)

### Primeiros Passos

1. Clone o repositório:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Extensões Recomendadas para o VSCode

Instale estas extensões para a melhor experiência de desenvolvimento:

1. **ESLint** (`dbaeumer.vscode-eslint`)
   - Verificação de código JavaScript/TypeScript
   - Ajuda a manter a qualidade do código

2. **Prettier** (`esbenp.prettier-vscode`)
   - Formatação de código
   - Garante um estilo de código consistente

3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
   - Autocompletar para classes Tailwind CSS
   - Visualização de estados hover

4. **PostCSS Language Support** (`csstools.postcss`)
   - Realce de sintaxe para PostCSS

### Configuração do VSCode

Adicione essas configurações ao seu arquivo `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### Estrutura do Projeto

```
portfolio-website/
├── app/                  # Next.js 13 app directory
│   ├── about/           # Página Sobre
│   ├── academic/        # Página de Experiência Acadêmica
│   ├── api/            # Rotas de API
│   ├── game/           # Página do jogos solicitado
│   ├── professional/   # Página de Experiência Profissional
│   └── projects/       # Página de exibição de projetos
├── components/          # Componentes React reutilizáveis
├── lib/                # Funções utilitárias
├── public/             # Arquivos estáticos
└── styles/            # Estilos globais
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint

### Funcionalidades

- 🌙 Tema escuro por padrão
- 📱 Design totalmente responsivo
- 🎮 Jogo interativo (Pedido na atividade proposta)
- 🔄 Integração com a API do GitHub
- ⚡ Transições de página rápidas
- 🎨 Componentes de UI modernos com shadcn/ui
- 📊 Componentes de linha do tempo para seções de experiência

### Personalização

1. Atualize as informações pessoais:
   - Edite`app/page.tsx` para o conteúdo da página inicial
   - Modifique os dados de experiência em `app/professional/page.tsx` e `app/academic/page.tsx`
   - Atualize a exibição de projetos em `app/projects/page.tsx`

2. Estilização:
   - Estilos globais estão em `app/globals.css`
   - Configuração de tema em `app/layout.tsx`
   - Configuração do Tailwind em `tailwind.config.ts`

### Implantação

Este projeto está configurado para exportações estáticas e pode ser implantado em várias plataformas:

1. Compile o projeto:
```bash
npm run build
```

2. Os arquivos estáticos serão gerados no diretório `out` 

3. Implante na plataforma de hospedagem de sua preferência (Netlify, Vercel, etc.)

### Suporte

Para problemas ou dúvidas, por favor, abra uma issue no repositório do GitHub.

### Licença

MIT License - sinta-se à vontade para usar este projeto para o seu portfólio pessoal!
