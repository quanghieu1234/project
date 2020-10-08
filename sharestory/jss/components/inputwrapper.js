import { BaseComponent } from "../basecomponent.js"
const style=/*html*/
`<style>
    *{ 
        font-family:'Kumbh Sans', sans-serif;
    }
    .input-label{
        text-transfrom: uppercase;


    }
    .input-wrapper{
        width:100%;
        height: 100%;
        border: none;

    

    }
    .input-main{
        border: 1px solid #FFCB6B;
        background: transparent;
        width: 300px;
        height:30px;

    }
    .input-error{
        font-size:13px;
        color: #DB5145;
    }

</style>
`
class InputWrapper extends BaseComponent {
    constructor() {
        super()
        this.props={
            label:"",
            type:"text",
            error:"",
            value:""

        }

    }
    static get observedAttributes(){
        return["label","type","error","value"]
    }
    render(){
        this._shadowRoot.innerHTML=/*html*/
        `
        ${style}
        <div class="input-wrapper">
          <label class="input-label"for="input">${this.props.label}</label>
          <br>
          <input class="input-main" type="${this.props.type}" value="${this.props.value}">
          <div class="input-error">${this.props.error}</div>
        </div>
        
        `
    }
    get value(){
        return this._shadowRoot.querySelector(".input-main").value
    }
}
window.customElements.define("input-wrapper",InputWrapper)