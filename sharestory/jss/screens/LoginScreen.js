import { BaseComponent } from "../basecomponent.js"
import { validateEmail, md5, getDataFromDoc, getDataFromDocs, saveCurrentUser } from "../utils.js"
const style =/*html*/`
<style>
.btn-login{
width:300px;
height:30px;

}
.form-login{
    display: flex;
    flex-direction: column;
    align-items: center
}


</style>

`

class LoginScreen extends BaseComponent {
    constructor() {
        super()
        this.state = {
            errors: {
                email: "",
                password: "",

            },
            data: {
                email: "",
                password: "",

            }

        }

    }
    render() {
        this._shadowRoot.innerHTML =/*html */
            `
        ${style}
        <section class="login-screen">
         <form action="" class="form-login">
          <input-wrapper class="email"label="Email" type="email" error="${this.state.errors.email}" value="${this.state.data.email}"></input-wrapper>
          <input-wrapper class="password"label="Password" type="password" error="${this.state.errors.password}" value="${this.state.data.password}"></input-wrapper>
            <div>          <button class="btn-login">Login</button></div>
            <a href="#!/register">Not have an account? Register</a>
         </form>

        </section>

        `
        this.$formLogin = this._shadowRoot.querySelector(".form-login")
        this.$formLogin.onsubmit = async (event) => {
            event.preventDefault();
            // Lay du lieu tu cac input-wrapper
            let email = this._shadowRoot.querySelector(".email").value
            let password = this._shadowRoot.querySelector(".password").value


            //kiem tra du lieu nhap vao neu co loi thi show ra
            let isPassed = true

            if (email == "" || !validateEmail(email)) {
                isPassed = false
                this.state.errors.email = "Invalid Email"

            }
            else {
                this.state.errors.email = ""
                this.state.data.email = email
            }

            if (password == "") {
                isPassed = false

                this.state.errors.email = "Input your password"

            }
            else {
                this.state.errors.password = ""
                this.state.data.password = password
            }


            // luu du lieu vao firestore
            console.log(this.state.data);
            this.setState(this.state)
            if (isPassed) {
                let response = await firebase
                    .firestore().collection("users")
                    .where("email", "==", this.state.data.email)
                    .where("password", "==", md5(password))
                    .get()
                if (response.empty) {
                    alert("email or password is not correct")
                }
                else {
                    // alert("Sing in succesfully")
                    // console.log(getDataFromDocs(response.docs[0]));

                    let currentUser = getDataFromDocs(response.docs)[0]
                    // //luu nguoi dung hien tai
                    saveCurrentUser(currentUser)

                    console.log(currentUser);

                    //chuyen sang trang index
                    router.navigate("/index")
                }
            }
            this.setState(this.state)
        }
    }
}
window.customElements.define("login-screen", LoginScreen)