# Nexus-UI

NexusUi é uma lib de componentes para criação de interfaces baseada nos estilos do tailwind. Foi desenvolvido usando as seguintes tecnologias: Javascript, Vue, Tailwind e Node.

## Recursos

- Componentes de interface prontos para uso
- Estilos baseados no Tailwind
- Desenvolvido com Javascript, Vue, Tailwind e Node

## Instalação

Para instalar o NexusUi, você precisa ter o Node.js e o NPM instalados.

Execute o comando `npm i @n0d3rr/nexus-ui` para instala o Nexus-ui em seu projeto

Em seu arquivo `main.js` faça a importação do Nexus-ui e seus estilos

```js
import { createApp } from "vue";
import "./style.css";

//Importando o Nexus-ui
import NexusUI from "@n0d3rr/nexus-ui";

//Importando estilos do Nexus-ui
import "@n0d3rr/nexus-ui/dist/styles.css";

import App from "./App.vue";

//Configurando o vue para usar o Nexus-ui
createApp(App).use(NexusUI).mount("#app");
```

## Uso

Para usar o Nexus-ui

Inclua a tag do componente desejado em seu HTML:

```html
<template>
  <N-Button> Botão </N-Button>
</template>
```

## Contribuição

Se você quiser contribuir para o Nexus-ui, siga as seguintes etapas:

1. Faça um fork do repositório
2. Crie sua branch com as alterações (`git checkout -b feature/fooBar`)
3. Commit suas alterações (`git commit -am 'Add some fooBar'`)
4. Faça o push para a branch (`git push origin feature/fooBar`)
5. Crie um Pull Request

## Licença

O NexusUi está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/webldavi/Nexus-ui/blob/main/LICENSE) para mais detalhes.


---

Desenvolvido com 💜 por Luís Daví