import React, { Component } from 'react';
import Products from './Products/Products';

class Body extends Component {
  constructor(props) {
    super(props);

      this.state = {
        products : [
          {
            name : "Iphone 13 Pro Max 5G",
            price : "30.490.000",
            images : "/images/SamSung_galaxy_Zflit.png",
            hot : true
          },
          {
            name : "Iphone 11 Pro Max 5G",
            price : "20.490.000",
            images : "/images/ip11.png",
            hot : false
          },
          {
            name : "Iphone 12 Pro Max 5G",
            price : "30.490.000",
            images : "/images/ip12.png",
            hot : true
          },
          {
            name : "VIVO v23 Pro 5G",
            price : "22.490.000",
            images : "/images/vivo-v23.png",
            hot : false
          },
          {
            name : "Iphone 13 Pro Max 5G",
            price : "32.490.000",
            images : "/images/ip13-pro_max.png",
            hot : false
          },
          {
            name : "OPPO X3 Pro 5G",
            price : "20.490.000",
            images : "/images/oppo_x3_pro.png",
            hot : true
          },
          
        ]
      };
  }
  
  show_product = () => {
   const listProduct = this.state.products.map((item, index) => 
   <Products key = {index} price = {item.price} images = { item.images } hot ={ item.hot }>{item.name} </Products>
   );
   return listProduct;
  }


    render() {
      return (
        <div className="App">
            <div className="row_1">
              <div className="col-12">
                  <h2> Product</h2>
              </div>
                Điện Thoại Bán Chạy Nhất
            </div> 
            {this.show_product()}
            <div>
                {this.products }
            </div>
        </div>
      );
    }
}

export default Body;