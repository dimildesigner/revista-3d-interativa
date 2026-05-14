<div align="center">
  <img src="https://github.com/dimildesigner/revista-3d-interativa/blob/main/public/icon_revista_3d.svg" alt="Revista 3D | Interativa" width="120" />
  <h1>📖 Revista 3D | Interativa</h1>
  <p><strong>Uma experiência imersiva de leitura digital</strong></p>

  <p>
    <a href="https://github.com/dimildesigner/revista-3d-interativa" target="_blank">
      <img alt="Live Demo" src="#" />
    </a>
    <img alt="Three.js" src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  </p>
</div>

---

## 📖 Revista 3D Interativa

Uma experiência imersiva de leitura digital desenvolvida com React.js e Three.js. Este projeto simula uma revista física em um ambiente 3D, permitindo a interação com a virada de páginas, curvatura realista do papel e iluminação dinâmica.

---

## ✨ Sobre o projeto

**Revista 3D | Interativa**

Este projeto nasceu da necessidade de criar uma forma inovadora de apresentar conteúdos digitais, unindo o design editorial clássico com as tecnologias mais modernas de renderização WebGL.

O grande desafio técnico superado foi a implementação de uma geometria personalizada que permite a deformação das páginas durante a transição, garantindo que a revista se comporte de forma orgânica e estável em diferentes navegadores.

---

## 🛠️ Tecnologias Utilizadas

| **React.js** | Biblioteca principal para a construção da interface e gerenciamento de estados. |
| **Three.js / React Three Fiber** | React Three Fiber: Motor gráfico para renderização do ambiente 3D. |
| **React Three Drei** | Helpers especializados para facilitar a implementação de texturas, controles e sombras. |
| **Vite** | Ferramenta de build de última geração para um desenvolvimento rápido e otimizado. |

---

## 💎 Recursos Técnicos

| **Geometria de Lâmina (BoxGeometry)** | Implementação de páginas com espessura real para evitar artefatos visuais e conflitos de profundidade (Z-fighting).

| **Curvatura Dinâmica** | Algoritmo matemático aplicado via useFrame que simula a dobra do papel baseada na posição da página.

| **Navegação Inteligente** | Sistema de controle por cliques (esquerdo para avançar, direito para voltar) com gerenciamento de estado resiliente.

| **Performance Otimizada** | Carregamento de texturas através da pasta public e uso de useMemo para evitar re-renderizações desnecessárias da geometria.

| **UI Customizada** | Interface flutuante com foco em tipografia e contraste, garantindo que o conteúdo 3D seja a estrela principal.

---

## ⚙️ Como rodar o projeto

### 1. Clone o repositório

```Bash
git clone https://github.com/dimildesigner/revista-3d-interativa
```

### 2. Instale as dependências:

```Bash
npm install
```

O servidor sobe em `http://localhost:5173/`

### 3. nicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 🌐 Deploy

| Serviço | Papel |
|---|---|
| **Vercel** | revista-3d-interativa (client/) — deploy automático a cada push na `main` |


---

## 📄 Licença

MIT © [dimildesigner](https://github.com/dimildesigner)