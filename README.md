# **Aplicação Web para Monitoramento e Controle Remoto**

Este repositório contém a aplicação web desenvolvida para monitorar e controlar remotamente o sistema embarcado. A interface permite visualizar em tempo real os valores lidos pelos sensores de temperatura e umidade do solo, integrados ao projeto final.

- **Repositório do Projeto Embarcado**: [EMBARCADOS_2025](https://github.com/jeremiasmarques/EMBARCADOS_2025)

---

## **Funcionalidades**

- **Monitoramento em Tempo Real**:
  - Visualização dos valores de temperatura lidos pelo sensor **DS18B20**.
  - Visualização dos valores de umidade do solo lidos pelo sensor **S12**.
  - Comunicação em tempo real com o ESP32 via WebSocket.

- **Interface Amigável**:
  - Desenvolvida com **React** e **Material-UI (MUI)** para uma experiência de usuário moderna e responsiva.

- **Integração com o Sistema Embarcado**:
  - Comunicação com o ESP32 via WebSocket para receber os dados dos sensores.

---

## **Tecnologias Utilizadas**

- **Frontend**:
  - [React](https://reactjs.org/) (v19.0.0) - Biblioteca para construção de interfaces de usuário.
  - [Material-UI (MUI)](https://mui.com/) (v6.4.6) - Biblioteca de componentes UI para React.
  - [React Router DOM](https://reactrouter.com/) (v7.2.0) - Gerenciamento de rotas na aplicação.

---

## **Configuração do Ambiente**

### **Pré-requisitos**

- **Node.js**: Certifique-se de ter o Node.js instalado (versão 18 ou superior).
  - [Download Node.js](https://nodejs.org/)

### **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/diegoCBorba/embarcados-web.git
   cd embarcados-web
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure o ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias (se aplicável).

---

## **Executando o Projeto**

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse a aplicação no navegador:
   - Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no terminal).

3. Para build de produção:
   ```bash
   npm run build
   ```

4. Para visualizar o build de produção localmente:
   ```bash
   npm run preview
   ```

---

## **Estrutura do Projeto**

- **`src/`**: Contém o código-fonte da aplicação.
  - **`hooks/`**: Lógica para comunicação via WebSocket do sistema embarcado.
  - **`layout/`**: Layout da aplicação.
  - **`pages/`**: Páginas da aplicação.
  - **`routes/`**: Configuração das rotas. 
  - **`App.tsx`**: Componente principal da aplicação.
  - **`main.tsx`**: Ponto de entrada da aplicação.
