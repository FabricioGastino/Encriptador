# Encriptador de Texto

Este é um projeto simples de encriptação e desencriptação de texto, desenvolvido como parte de um desafio. Ele permite que você converta uma mensagem em um texto criptografado e também faça a desencriptação do texto.

## Funcionalidades

- **Criptografar Texto:** Converte texto simples em uma versão criptografada, utilizando substituições específicas para cada vogal.
- **Descriptografar Texto:** Reverte o texto criptografado de volta para o seu formato original.
- **Copiar Texto:** Permite copiar o texto criptografado ou descriptografado para a área de transferência.

## Tecnologias Utilizadas

- **HTML:** Estrutura básica da página.
- **CSS:** Estilização e layout da página.
- **JavaScript:** Lógica de encriptação, desencriptação e manipulação do DOM.

## Como Usar

1. Digite seu texto na área de texto fornecida.
2. Clique em "Criptografar" para criptografar o texto.
3. Clique em "Descriptografar" para reverter o texto criptografado.
4. Use o botão "Copiar" para copiar o texto resultante.

## Regras de Criptografia

- As vogais são substituídas de acordo com a seguinte tabela:

| Letra | Código  |
|-------|---------|
| e     | enter   |
| i     | imes    |
| a     | ai      |
| o     | ober    |
| u     | ufat    |

## Estrutura do Projeto

```plaintext
├── index.html
├── script.js
├── style.css
└── imagens/
