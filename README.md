📖 Interactive 3D Showcase Magazine
Uma experiência imersiva de leitura digital desenvolvida com React.js e Three.js. Este projeto simula uma revista física em um ambiente 3D, permitindo a interação com a virada de páginas, curvatura realista do papel e iluminação dinâmica.

🚀 Sobre o Projeto
Este projeto nasceu da necessidade de criar uma forma inovadora de apresentar conteúdos digitais, unindo o design editorial clássico com as tecnologias mais modernas de renderização WebGL.

O grande desafio técnico superado foi a implementação de uma geometria personalizada que permite a deformação das páginas durante a transição, garantindo que a revista se comporte de forma orgânica e estável em diferentes navegadores.

🛠️ Tecnologias Utilizadas
React.js: Biblioteca principal para a construção da interface e gerenciamento de estados.

Three.js / React Three Fiber: Motor gráfico para renderização do ambiente 3D.

React Three Drei: Helpers especializados para facilitar a implementação de texturas, controles e sombras.

Vite: Ferramenta de build de última geração para um desenvolvimento rápido e otimizado.

💎 Recursos Técnicos
Geometria de Lâmina (BoxGeometry): Implementação de páginas com espessura real para evitar artefatos visuais e conflitos de profundidade (Z-fighting).

Curvatura Dinâmica: Algoritmo matemático aplicado via useFrame que simula a dobra do papel baseada na posição da página.

Navegação Inteligente: Sistema de controle por cliques (esquerdo para avançar, direito para voltar) com gerenciamento de estado resiliente.

Performance Otimizada: Carregamento de texturas através da pasta public e uso de useMemo para evitar re-renderizações desnecessárias da geometria.

UI Customizada: Interface flutuante com foco em tipografia e contraste, garantindo que o conteúdo 3D seja a estrela principal.

⚙️ Como rodar o projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
   npm run dev
👨‍💻 Desenvolvedor
Edimilson (Eddie)
Senior Designer em transição para Desenvolvimento Web (Front-end). Atualmente graduando em Desenvolvimento de Software Multiplataforma.