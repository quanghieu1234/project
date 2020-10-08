import { BaseComponent } from "../basecomponent.js";

const style = /*html*/ `
<style>
    .content {
        width: 70%;
        margin: 100px auto;
    }
</style>
`;

class IndexScreen extends BaseComponent {
    constructor() {
        super();

    }

    render() {
        this._shadowRoot.innerHTML = /*html*/`
            ${style}
            <section class="index-screen">
                <navigation-bar></navigation-bar>
                <div class="content">
                    <story-img ></story-img>
                </div>
            </section>
        `;
    }
}

window.customElements.define('index-screen', IndexScreen);