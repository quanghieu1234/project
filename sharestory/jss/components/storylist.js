import {BaseComponent} from "../basecomponent.js"   
import { getDataFromDocs } from "../utils.js";

class StoryList extends BaseComponent{

    constructor(){
        super()
        this.state={
            stories:[]
        }
    }
    render(){
        let html=""
        for (let story of this.state.stories){
            html+=/*html*/`<story-container id="${story.id}" content="${story.content}" owner="${story.owner}" date-modified="${story.dateModified}""></story-container>`
        }
        this._shadowRoot.innerHTML=/*html*/`
        <div class="story-list">
       ${html}
        </div>
        
        
        `
    }
    componentDidMount(){
        firebase.firestore().collection("stories").onSnapshot((querySnapshot)=>{
            // console.log(getDataFromDocs(querySnapshot)
            this.setState({
                stories: getDataFromDocs(querySnapshot.docs)
            })
            
        })
    }



}
window.customElements.define("story-list",StoryList)