# 🏗️ GPObras Frontend (Ambiente de Estudo)

> Status: 🚧 Em Desenvolvimento (Sprint 1: Interface e Mock Data)

## 🎯 Sobre o Projeto
Este repositório é uma réplica de estudo da interface de um Sistema de Orçamentação para Engenharia Civil.

O objetivo é simular o ambiente de desenvolvimento de uma aplicação real, focando na construção de um Frontend moderno, tipado e responsivo, preparando o terreno para integração futura com uma API Python (FastAPI).

Diferencial: O projeto não utiliza HTML/CSS puro. Toda a estrutura é baseada em componentes React reutilizáveis e tipagem estrita com TypeScript.

## 🛠️ Tecnologias Utilizadas

**Core:**
* Framework: Next.js 15 (App Router & Server Components)
* Linguagem: TypeScript (Interface Strict Typing)
* Estilização: Tailwind CSS v4

**Bibliotecas & Ferramentas:**
* lucide-react: Ícones vetoriais.
* clsx / tailwind-merge: Gerenciamento dinâmico de classes CSS.
* eslint: Padronização de código.

## ⚡ Funcionalidades Implementadas

### ✅ Sprint 1: UI & Lógica de Renderização
- [x] Setup do Ambiente: Configuração do Next.js com TypeScript e ESLint.
- [x] Componentização: Criação do componente ItemCard para exibição de itens de orçamento.
- [x] Mock Data: Simulação de dados de API via arquivo estático (mock.ts) para testes de interface.
- [x] Cálculo em Tempo Real: Utilização do método .reduce() para calcular o valor total da obra automaticamente baseado nos dados renderizados.
- [x] Design Responsivo: Layout adaptável (Grid System) utilizando Tailwind CSS.

### 🔜 Próximos Passos (Roadmap)
- [ ] Gerenciamento de Estado: Implementação de useState para adicionar novos itens via formulário.
- [ ] Integração com API: Consumo de dados reais do Backend (FastAPI/Python) via fetch.
- [ ] CRUD Completo: Funcionalidades de criar, editar e excluir itens do orçamento.

## 📂 Estrutura do Projeto

src/
├── app/
│   ├── data/       # Dados fictícios (Mock) para desenvolvimento
│   ├── types.ts    # Contratos de dados (Interfaces TypeScript)
│   ├── page.tsx    # Página principal (Dashboard)
│   └── globals.css # Configurações do Tailwind
├── components/
│   └── ItemCard.tsx # Componente visual de item de orçamento

## 🚀 Como Rodar Localmente

1. Clone o repositório:
   git clone https://github.com/Matheus-MacielCardozo/GPObras_LearningCopy.git

2. Instale as dependências:
   npm install

3. Rode o servidor de desenvolvimento:
   npm run dev

4. Acesse http://localhost:3000 no seu navegador.

---
Desenvolvido por Matheus Maciel como parte do portfólio de estudos em Desenvolvimento Fullstack.