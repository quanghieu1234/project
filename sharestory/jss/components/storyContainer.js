import { BaseComponent } from "../basecomponent.js"
import { getDataFromDoc } from "../utils.js"

const style=/*html*/`

<style>
.story-container{
    padding: 10px;
    border: 1px solid #4F4657;
    border-radius:5px;
    background-color:white,
}
.story-info{
    padding:5px 10px;
    background-color: white;
    border-bottom: 1px solid red;

}
.date-modified{
    font-size:30px;
    color:red;
}
.owner{
    color:#75B1A9
}
</style>




`

class StoryContainer extends BaseComponent {

    constructor() {
        super()
        this.props = {
            "content": "",
            "owner": "",
            "date-modified": "",
            "id":""
        },
        this.state={
            name:""
        }
    }

    static get observedAttributes() {
        return ["owner", "content", "date-modified","id"]
    }
    render() {
        this._shadowRoot.innerHTML =/*html*/

            `
            ${style}
   <div class="story-container">    
        <div class="story-info">
            <div class="owner">${this.state.name}</div>
            <div class="date-modified">${this.props["date-modified"]}</div>
        </div>

        <div class="story-content">
        ${this.props.content}
        </div>
   </div>
   
   `

    }
   async componentDidUpdate(){
        if(this.props.owner){
          let response= await  firebase.firestore()
          .collection("users")
          .doc(this.props.owner)
          .get();
          
          let owner= getDataFromDoc(response)
    this.setState({
    name: owner.name
    })
           
   }
    }
}
window.customElements.define("story-container", StoryContainer)