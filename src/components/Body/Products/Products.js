import React, { Component } from 'react';

class Products extends Component {

  constructor(props) {
    super(props);
      this.state ={
        editing : false
    };
  }
  

    show_featured = (featured) =>{
        if(featured === true){
            return <span className="tag2 hot">HOT</span>;
        }
    }
    format_curency = (price) => {
        return price.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }

    show_infor = () => {
        alert(this.props.children);
    }
    buttonEdit = () => {
      this.setState({editing : true});
    }
    buttonSave = () => {
      this.setState({editing : false});

      console.log(this.txtName.value);
    }

     renderNomal = () =>{
      return  <div className= "col-md-12 product-info smart-form" style={{marginTop : 10}}>
                  <div className="form-group">
                      <button  className="btn btn-info" onClick={ () => { this.buttonEdit() } }>Edit</button>
                      <button  className="btn btn-danger">Remove</button>
                  </div>
              </div>
     }
     renderForm =() => {
      return  <div className="col-md-12 product-info smart-form" style={{marginTop : 10}}>
                    <div className="form-group">
                          <input ref={ (input) => { this.txtName = input } } defaultValue={ this.props.children } type="text" className="form-control" id="usr" />
                    </div>
                    <div className="form-group">
                          <button className="btn btn-info" onClick={ () => { this.buttonSave() } } >Save</button>
                    </div>
              </div>
            
     }
     show_button = () => {
      if(this.state.editing === false){
        return this.renderNomal();
      }else{
        return this.renderForm();
      }
     }
 
    render() {
        return (
          <div className="row">
            <div className="col-2th">
              <div className="card border">
                <div className="image">
                  <img src={this.props.images} />
                  <h2>{this.props.hot}</h2>
                </div>
                <div className="name">
                  <p>
                    {this.props.children}
                  </p>
                </div>
                <div className="price">
                  <p>
                    {this.format_curency(this.props.price)}VNĐ
                  </p>
                </div>
                <div className="product_btn">
                  <input onClick={this.show_infor} type="button" className="btn primary_btn1" name="Button" defaultValue="MUA HÀNG" onclick="el.MuaHang" />
                  <input onClick={this.show_infor} type="button" className="btn primary_btn2" name="Button2" defaultValue="GIỎ HÀNG" onclick="el.GioHang" />
                </div>
                <hr />
                  {this.show_button()}
              </div>
            </div>
          </div>
        );
    }
}

export default Products;