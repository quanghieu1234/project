import { BaseComponent } from "../basecomponent.js";

const style = /*html*/`
<style>
    * {
        font-family: 'Baloo 2', cursive;
        padding:0;
        margin:0;
        box-sizing:border-box; 
    }

 .navbar{
    background: #191919;
    display:flex;
    align-items:center;
    justify-content:space-between;
 }
 ul,ol{
     list-style:none;
 }
 .navbar .nav-menu , .navbar .nav-icons{
     display:flex;
 }
 .navbar a, .navbar{
    color: #959595;
    text-decoration:none;
 }
 .navbar a{
     padding:10px;
     display:inline-block;
 }
 .navbar .nav-prj {
    align-items:center;
    display:flex;
  }
 .navbar .nav-prj a{
     
    padding:5px 10px;
    border-radius:5px;
    color:white;
    background-color: #0057ff;
 }
 .nav-icons li {
   display:flex;
   align-items:center;
 }
 .nav-icons li input{
    background: #191919;
    border:none;
    border:1px solid #ccc;
    color:white;
 }
 .navbar .active a{
     color:white;
 }
</style>
`;

class NavigationBar extends BaseComponent {
    constructor() {
        super();
        this.state={
            user:{
                email:'',
                name:'truong',
                
            }
        }
    }
   
    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <nav class="navbar">
                <div class="logo"><img src="https://img.icons8.com/doodle/48/ffffff/mac-os.png"/></div>
                <ul class="nav-menu">
                    <li class="active"><a href="">For You</a></li>
                    <li><a href="">Discover</a></li>
                    <li><a href="">Live</a></li>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Jobs</a></li>
                    <li class="nav-prj"><a href="">Create a Project</a></li>
                </ul>
                <ul class="nav-icons">
                    <li><input type="text" class="search"/><img src="https://img.icons8.com/fluent-systems-filled/18/959595/search.png"/></li>
                    <li><a href=""><img src="https://img.icons8.com/color/24/000000/new-message.png"/></a></li>
                    <li><a href=""><img src="https://img.icons8.com/fluent-systems-regular/24/959595/jingle-bell.png"/></a></li>
                 
                    <li><a href="">${this.state.user.name}</a></li>
                    <li><a href="">Logout</a></li>
                </ul>
            </nav>
        `;
      const  handlerSearch = ()=>{
            const searching =  this._shadowRoot.querySelector('.search');
        
            searching.addEventListener('change',(e)=>{
              
            })
        }
        handlerSearch();
    }
}

window.customElements.define('navigation-bar', NavigationBar);