import { BaseComponent } from "../basecomponent.js";
import { getDataFromDoc } from "../utils.js"

const style = /*html*/`
<style>
  .img-card{
      flex-basis:calc(100%/3 - 10px);
      max-width:calc(100%/3 - 10px);
  }
  .img-card img{
      width:100%;
      display:block;
  }
  .list-img{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
    }
  .list-content{
      display:flex;
      justify-content:space-between;
      align-items:center;
  }
  .list-option{
    display:flex;
    align-items:center;
  }
  .list-option  span{
    display:flex;
    align-items:center;
    padding:5px;
    cursor:pointer;
  }
  .list-option  span h5{
      margin-left:2px;
  }
  .card-img{
      position:relative;
  }
  .overlay{
      position:absolute;
      overflow:hidden;
      width:100%;
      height:100%;
      top:0;
      left:0;
      display:flex;
      align-items:flex-end;
      
     
  }
  .overlay h2{
      color:white;
      transform:translateY(30px);
      transition:ease 0.3s;
      margin-bottom:0;
  }
  .overlay:hover h2{
    
    transform:translateY(0);
  }
</style>
`;

class StoryImg extends BaseComponent {
    constructor() {
        super();
        this.state={
            data:[
                {
                  id: "1",
                  name: "max author",
                  avatar: "http://lorempixel.com/640/480/people",
                 author: "author 1",
                 likes: 14,
                  views: 59
                },
                {
                  id: "2",
                  name: "john 2",
                  avatar: "http://lorempixel.com/640/480/transport",
                 author: "author 2",
                 likes: 11,
                  views: 86
                },
                {
                  id: "3",
                  name: "name 3",
                  avatar: "http://lorempixel.com/640/480/sports",
                 author: "author 3",
                 likes: 82,
                  views: 14
                },
                {
                  id: "4",
                  name: "name 4",
                  avatar: "http://lorempixel.com/640/480/business",
                 author: "author 4",
                 likes: 8,
                  views: 54
                },
                {
                  id: "5",
                  name: "name 5",
                  avatar: "http://lorempixel.com/640/480/animals",
                 author: "author 5",
                 likes: 97,
                  views: 35
                },
                {
                  id: "6",
                  name: "name 6",
                  avatar: "http://lorempixel.com/640/480/food",
                 author: "author 6",
                 likes: 41,
                  views: 32
                },
                {
                  id: "7",
                  name: "name 7",
                  avatar: "http://lorempixel.com/640/480/abstract",
                 author: "author 7",
                 likes: 96,
                  views: 19
                },
                {
                  id: "8",
                  name: "name 8",
                  avatar: "http://lorempixel.com/640/480/people",
                 author: "author 8",
                 likes: 63,
                  views: 19
                },
                {
                  id: "9",
                  name: "name 9",
                  avatar: "http://lorempixel.com/640/480/nature",
                 author: "author 9",
                 likes: 30,
                  views: 38
                },
                {
                  id: "10",
                  name: "name 10",
                  avatar: "http://lorempixel.com/640/480/transport",
                 author: "author 10",
                 likes: 56,
                  views: 90
                },
                {
                  id: "11",
                  name: "name 11",
                  avatar: "http://lorempixel.com/640/480/people",
                 author: "author 11",
                 likes: 45,
                  views: 56
                },
                {
                  id: "12",
                  name: "name 12",
                  avatar: "http://lorempixel.com/640/480/food",
                 author: "author 12",
                 likes: 53,
                  views: 67
                },
                {
                  id: "13",
                  name: "name 13",
                  avatar: "http://lorempixel.com/640/480/transport",
                 author: "author 13",
                 likes: 68,
                  views: 22
                },
                {
                  id: "14",
                  name: "name 14",
                  avatar: "http://lorempixel.com/640/480/cats",
                 author: "author 14",
                 likes: 95,
                  views: 93
                },
                {
                  id: "15",
                  name: "name 15",
                  avatar: "http://lorempixel.com/640/480/abstract",
                 author: "author 15",
                 likes: 3,
                  views: 10
                }
              ],
            userId:'LaxM8MYPRqzUnSDchNp4'
        }
     
    }
    
    
    render() {
        let listImg='';
        // item la 1 phan tu cua this.state.data
        const m = this.state.data.map(item=>{
            listImg += `<div class="img-card">
             <input type="checkbox"/>
             <div class="img-component">
              <div class="card-img"><img src=${item.avatar} width="100%"/>
              <div class="overlay">
              <h2>${item.name}</h2>
              </div>
              </div>
             <div class="list-content">
               <h3>${item.author}</h3>
               <div class="list-option">
               <span><img src="https://img.icons8.com/material-rounded/18/000000/facebook-like.png"/><h5> ${item.likes}</h5></span> 
               <span><img src="https://img.icons8.com/android/18/000000/visible.png"/>  <h5>${item.views}</h5></span> 
               </div>
             </div>
             </div>
            </div>`
            
            ;
        })
       
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <h1>Choose your topic </h1>
            <div class="list-img">
              ${listImg}
            </div>
            <button class="save-topic">Luu topic</button>
        `
        let listData = this._shadowRoot.querySelectorAll('input[type="checkbox"]');  
        let btnSave = this._shadowRoot.querySelector('.save-topic')    
        console.log(listData,'listData');
        const data = []
        // listData.forEach((item,index)=>{
        //     item.addEventListener('change', async ()=>{
        //      if (item.checked) {
        //         data.push(this.state.data[index]);
        //         await firebase.firestore().collection('users').doc(this.state.userId).update({
        //             favorites: [...data]
        //         })  
        //      }
        //      await alert('them thanh cong')
        //     })
        // })
        // ;
  
        btnSave.addEventListener('click',()=>{
            listData.forEach( async (item,index)=>{
                 if (item.checked) {
                    data.push(this.state.data[index]);
                    await firebase.firestore().collection('users').doc(this.state.userId).update({
                        favorites: [...data]
                    })  
                 }
                 item.checked=false;
            })
        })

        ;
       
    //   setTimeout(
    //     async ()=>{ 
    //         console.log(this.state.data,'this.state.data');
    //      const m =    await firebase.firestore().collection('list-image').where(id,"==","12").get() ;
    //      const result = m ;                   
    //       await  console.log(result,'result');
    //   }, 2000)
    }
}

window.customElements.define('story-img', StoryImg);