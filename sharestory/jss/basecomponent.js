class BaseComponent extends HTMLElement{
    props // gia tri được truyền từ ngoài vào   

    state  // giá trị mà bản thân có sẵn
    constructor(){
        super()
        this._shadowRoot=this.attachShadow({mode:"open"})
        this.props={}
        this.state={}
    }
    connectedCallback(){

        this.render()
        this.componentDidMount()
    }

    attributeChangedCallback(name,oldValue,newValue){
        this.props[name]=newValue;
        this.render();
        this.componentDidUpdate()

    }
    disconectedCallback(){
        this.componentWillUnmount();


    }
    setState(newState){
        this.state=newState
        this.render()
        this.componentDidUpdate()
    }
    /**
     * IN html ra ngoai man hinh
     * Gan su kien cho cac the ben trong component
     */
    render(){


    }
    /**
     * Duoc goi sau  khi component duoc sinh ra va sau khi render
     * duoc goi 1 lan duy nhat
     */
    componentDidMount(){

    }
    /**
     * Duoc goi sau khi props hoac state thay doi, sau khi render
     */
    componentDidUpdate(){


    }
    /**
     * Duoc goi truoc khi component bien mat
     */
    componentWillUnmount(){

    }
}
export {BaseComponent}