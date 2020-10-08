var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
window.router = new Navigo(root,useHash,hash)
let $app = document.getElementById("app")

window.router.on("/login",function(){
    $app.innerHTML= `<login-screen></login-srceen>`
}).resolve()
window.router.on("/register",function(){
    $app.innerHTML=`<register-screen></register-screen>`
}).resolve()
window.router.on("/index",function(){
    $app.innerHTML=`<index-screen></index-screen>`
}).resolve()

//xu ly truong hop nguoi dung truy cap vao router ko ton tai
window.router.notFound(function(){
    $app.innerHTML="Khong tim thay trang"
})