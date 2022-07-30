import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";

const app = document.getElementById("app");

const Main = (content) => html`<main>${content}</main>`;

const Hello = html`
  <div class="panel">
    <p>Hello, <span>let's get it </span> 😏</p>
  </div>
`;

const pageLayout = Main(Hello);

render(pageLayout, app);
