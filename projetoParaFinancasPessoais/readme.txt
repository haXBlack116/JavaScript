Projeto Finanças Pessoais
Descrição
O projeto "Finanças Pessoais" é uma aplicação web simples que permite ao usuário gerenciar suas transações financeiras pessoais. Ele permite adicionar, listar e remover transações, além de calcular e exibir o saldo total das finanças.

Tecnologias Utilizadas
HTML: Estrutura da página.
CSS: Estilização da interface do usuário.
JavaScript: Manipulação do DOM, eventos e comunicação com o servidor.
JSON Server: API simulada para armazenar as transações.

git clone https://github.com/haXBlack116/projeto-financas-pessoais.git

cd projeto-financas-pessoais
npm install -g json-server
json-server --watch db.json

Clone o repositório do projeto:
git clone https://github.com/seu-usuario/projeto-financas-pessoais.git

Navegue até o diretório do projeto:
cd projeto-financas-pessoais

Instale o JSON Server globalmente (caso ainda não tenha):
npm install -g json-server

Inicie o JSON Server para simular uma API RESTful:
json-server --watch db.json

renderTransition(transitionData): Renderiza uma transação na interface do usuário.

fetchTransitions(): Busca as transações do servidor e as renderiza na página.

removeTransition(id): Remove uma transação tanto do servidor quanto da interface do usuário.

updateBalance(): Calcula e atualiza o saldo total com base nas transações listadas.

form.addEventListener('submit', async (ev)): Evento que lida com o envio do formulário para adicionar novas transações.

db.json
Arquivo JSON que simula o banco de dados, utilizado pelo JSON Server para armazenar as transações.

