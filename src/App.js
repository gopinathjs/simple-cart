import React from 'react';
import Cart from './Cart'; 
import Navbar from './Navbar';

class App extends React.Component{


  constructor(){
    super();
    this.state = {
       products : [
        {
            price : 999,
            title : 'Watch',
            qty : 0,
            img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            id : 1
        },
        {
            price : 9999,
            title : 'mobile phone',
            qty : 0,
            img : 'https://images.unsplash.com/photo-1604548530945-fbdce3e76bc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
            id : 2
        },
        {
            price : 9999,
            title : 'Laptop',
            qty : 0,
            img : 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
            id : 3
        }
       ] 
    }
   
}

handleIncreaseQuantity = (product) => {
    console.log("plz increase the qty of",product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products : products
    })
}

handleDecreaseQuantity = (product) =>{
    const { products } =this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0){
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products
    })
}

handlerDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);
    this.setState({
        products : items
    })
}


getCartCount =()=> {
    const {products} = this.state;

    let count = 0;
    products.forEach((product) => {
        count+=product.qty;
    })

    return count;
}

getCartTotal = () =>{
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) =>{
       return cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
}


  render(){

    const { products } = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
       products={products}
       onIncreaseQuantity ={this.handleIncreaseQuantity}
       onDecreaseQuantity = {this.handleDecreaseQuantity}  
       onDeleteProduct = {this.handlerDeleteProduct}
       />
       <div style={{padding:10, fontSize:20}}>TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
