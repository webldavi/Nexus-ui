<h1 align="center">Nexus-UI</h1>

<img src="https://github.com/webldavi/Nexus-ui/blob/reboot/nexus.png?raw=true" align="start"/>

>NexusUi é uma lib de componentes para criação de interfaces baseada nos estilos do tailwind. <br/> Foi desenvolvido usando as seguintes tecnologias: Javascript, Vite, Vue, Tailwind e Node.js.

## 🧩 Recursos

- Componentes de interface prontos para uso
- Estilos baseados no Tailwind
- Desenvolvido com Javascript, Vue, Tailwind e Node

## 🚀 Instalando

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

## 👨‍💻 Uso

Para usar o Nexus-ui

Inclua a tag do componente desejado em seu HTML:

```html
<template>
  <N-Button> Botão </N-Button>
</template>
```

## 📫 Contribuindo para [Nexus-UI](https://github.com/webldavi/Nexus-ui)

Se você quiser contribuir para o Nexus-ui, siga as seguintes etapas:

1. Faça um fork do repositório
2. Crie sua branch com as alterações (`git checkout -b feature/fooBar`)
3. Commit suas alterações (`git commit -m 'Add some fooBar'`)
4. Faça o push para a branch (`git push origin feature/fooBar`)
5. Crie um Pull Request

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/webldavi">
        <img src="https://webldavi.vercel.app/assets/photo-c05c96c4.jpg" width="100px;" alt="Foto de Luís daví no "/><br>
        <sub>
          <b>Luís Daví</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença


Esse projeto está sob licença. Veja o arquivo [LICENSE.md](https://github.com/webldavi/Nexus-ui/blob/main/LICENSE) para mais detalhes.

---

Desenvolvido com 💜 por Luís Daví
