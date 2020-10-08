import {BaseComponent} from"../basecomponent.js"
import {validateEmail, md5} from "../utils.js"
const style=/*html*/`
<style>
.btn-register{
width:300px;
height:30px;

}
.form-register{
    display: flex;
    flex-direction: column;
    align-items: center
}


</style>

`

class RegisterScreen extends BaseComponent{
    constructor(){
        super()
        this.state={
            errors:{
                name:"",
                email:"",
                password:"",
                confirmPassword:""
            },
            data:{name:"",
            email:"",
            password:"",
            favorites:[]
                
            }

        }

    }
    render(){
        this._shadowRoot.innerHTML=/*html */
        `
        ${style}
        <section class="register-screen">
         <form action="" class="form-register">
          <input-wrapper class="name"label="Name" type="text" error="${this.state.errors.name}" value="${this.state.data.name}"></input-wrapper>
          <input-wrapper class="email"label="Email" type="email" error="${this.state.errors.email}" value="${this.state.data.email}"></input-wrapper>
          <input-wrapper class="password"label="Password" type="password" error="${this.state.errors.password}" value="${this.state.data.password}"></input-wrapper>
          <input-wrapper class="confirm-password"label="Confrm password" type="password" error="${this.state.errors.confirmPassword}"></input-wrapper>
            <div>          <button class="btn-register">Register</button></div>
            <a href="#!/login">If already have an account?login</a>
         </form>

        </section>

        `
        this.$formRegister = this._shadowRoot.querySelector(".form-register")
        this.$formRegister.onsubmit=async (event)=>{
            event.preventDefault();
            // Lay du lieu tu cac input-wrapper
            let name= this._shadowRoot.querySelector(".name").value 
            let email= this._shadowRoot.querySelector(".email").value 
            let password= this._shadowRoot.querySelector(".password").value 
            let confirmPassword= this._shadowRoot.querySelector(".confirm-password").value 


            //kiem tra du lieu nhap vao neu co loi thi show ra
            let isPassed=true
            if(name==""){
                isPassed=false
                this.state.errors.name="Input your name"

            }
            else{
                this.state.errors.name="";
                this.state.data.name= name
            }
            if(email==""|| !validateEmail(email)){
                isPassed=false
                this.state.errors.email="Input your email"

            }
            else{
                this.state.errors.email=""
                this.state.data.email=email
            }

            if(password==""){
                isPassed=false

                this.state.errors.email="Input your password"
            }
            else{
                this.state.errors.password=""
                this.state.data.password=password
            }
            if(confirmPassword=""|| confirmPassword!= password){
                isPassed=false
                this.state.errors.confirmPassword="Your password doesnot match"
            }
            else{
                this.state.errors.confirmPassword=""
            }

            // luu du lieu vao firestore
            console.log(this.state.data);
            this.setState(this.state)
            if(isPassed){
                this.state.data.password=md5(password).toString()
                //check email trung
                let response= await firebase.firestore().collection("users").where("email","==",email).get()
                await  console.log(response,'response');
                if(response.empty){
                    await firebase.firestore().collection("users").add(this.state.data)
                    
                    alert("Sign uo successfully")
                }
                else{
                    alert("your email has already benn used")
                }
             
            }
        }
    }
}
window.customElements.define("register-screen",RegisterScreen)