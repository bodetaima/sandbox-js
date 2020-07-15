import "../css/index.scss";

let template = `<div class="container mx-auto my-4">
<h1>Welcome to the Sandbox</h1>
<p class="mx-auto">A silver's edge Frontend Sandbox!</p>
<hr />
<p><strong>Buttons</strong></p>
<p>Normal</p>
<div class="flex">
    <button class="flex-row w-32 mx-1 btn btn-default">Default</button>
    <button class="flex-row w-32 mx-1 btn btn-secondary">Secondary</button>
    <button class="flex-row w-32 mx-1 btn btn-primary">Primary</button>
    <button class="flex-row w-32 mx-1 btn btn-active">Active</button>
    <button class="flex-row w-32 mx-1 btn btn-danger">Danger</button>
    <button class="flex-row w-32 mx-1 btn btn-info">Info</button>
    <button class="flex-row w-32 mx-1 btn btn-warn">Warning</button>
</div>
<p>Inverted</p>
<div class="flex">
    <button class="flex-row w-32 mx-1 btn btn-default--inverted">Default</button>
    <button class="flex-row w-32 mx-1 btn btn-secondary--inverted">Secondary</button>
    <button class="flex-row w-32 mx-1 btn btn-primary--inverted">Primary</button>
    <button class="flex-row w-32 mx-1 btn btn-active--inverted">Active</button>
    <button class="flex-row w-32 mx-1 btn btn-danger--inverted">Danger</button>
    <button class="flex-row w-32 mx-1 btn btn-info--inverted">Info</button>
    <button class="flex-row w-32 mx-1 btn btn-warn--inverted">Warning</button>
</div>
</div>`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("app").insertAdjacentHTML("beforeend", template);
});

