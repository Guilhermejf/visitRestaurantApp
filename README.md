# App - Registro de Refeições

Este é um aplicativo de registro de refeições em React Native utilizando o Expo e a biblioteca `react-native-calendars`. O aplicativo permite que os usuários marquem e excluam datas no calendário para registrar refeições.

## Funcionalidades Principais

- **Marcar Refeições no Calendário**: O usuário pode selecionar uma data no calendário e marcá-la como um dia em que uma refeição foi registrada.
- **Excluir Refeições**: Se uma data já estiver marcada, o usuário pode excluí-la ao pressionar longamente sobre a data.
- **Contador de Refeições**: O aplicativo exibe um contador que mostra o número de dias em que refeições foram registradas.
- **Registro Automático de Refeições**: O usuário pode registrar a refeição do dia atual com apenas um toque.
- **Navegação de Meses**: Permite a navegação entre diferentes meses no calendário para visualização de registros passados ou futuros.

## Tecnologias Utilizadas

- **React Native**: Para o desenvolvimento da interface do aplicativo.
- **Expo**: Para facilitar o desenvolvimento e a construção do app.
- **SQLite**: Para persistência de dados locais.
- **react-native-calendars**: Biblioteca usada para exibição e interação com o calendário.

## Estrutura do Projeto

```bash
├── App.js                    # Componente principal do aplicativo
├── src
│   ├── database
│   │   ├── initializeDB.js    # Função para inicializar o banco de dados SQLite
│   │   ├── visitsRepository.js# Funções para manipulação de dados (inserir, deletar, buscar registros)
└── assets                     # Imagens e outros assets estáticos
```

## Funcionalidades do Código

### `initializeDB()`
Inicializa o banco de dados local usando SQLite.

### `getAllDate()`
Retorna todas as datas marcadas no banco de dados.

### `getDateSelected(date)`
Verifica se uma data específica está marcada no banco de dados.

### `getMonth(year, month)`
Busca todas as datas marcadas para um mês específico.

### `insertDate(date)`
Insere uma nova data marcada no banco de dados.

### `delDate(id)`
Exclui uma data marcada com base em seu ID.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/repo-app-notas.git
   ```

2. Instale as dependências:

   ```bash
   cd repo-app-notas
   npm install
   ```

3. Inicie o servidor de desenvolvimento com Expo:

   ```bash
   npm start
   ```

4. Digitalize o QR Code com o aplicativo Expo Go para rodar no seu dispositivo móvel.

## Futuras Funcionalidades

- **Sincronização com Nuvem**: Implementar a sincronização dos dados com um serviço de nuvem para backup e acesso entre dispositivos.
- **Notificações**: Adicionar lembretes automáticos para dias em que refeições não foram registradas.

## Contribuição

Fique à vontade para abrir *issues* e enviar *pull requests*. Todas as contribuições são bem-vindas!
