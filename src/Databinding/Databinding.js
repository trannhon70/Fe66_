import React, { Component } from 'react'

export default class Databinding extends Component {
    product = {
    id: '1',
    name: 'Iphone',
    price:'10000',
    img:'https://picsum.photos/200/200'
    }
    renderProduct=() =>{
        return <div className="w-25 mt-2">
                    <div className="card">
                        <img src={this.product.img} alt="..."/>
                        <div className="card-body">
                            <p>{this.product.name}</p>
                            <p>{this.product.price}</p>
                        </div>
                        <div className="card-footer bg-dark text-white">
                            <button className="btn btn-primary">đặt mua</button>
                        </div>
                    </div>
                </div>
    }


    //phương thức render
    render() {
        let hoTen='Trần Xuân Nhơn'
        let product={
            id: '1',
            name: 'Iphone',
            price:'10000',
            img:'https://picsum.photos/200/200'
        }


        return (
            <div className="container-fluid">
                <p id="txthoTen">Họ tên :{hoTen}</p>
                <div className="w-25 mt-2">
                    <div className="card">
                        <img src={this.product.img} alt="..."/>
                        <div className="card-body">
                            <p>{this.product.name}</p>
                            <p>{this.product.price}</p>
                        </div>
                        <div className="card-footer bg-dark text-white">
                            <button className="btn btn-primary">đặt mua</button>
                        </div>
                    </div>
                </div>
                {this.renderProduct()}
            </div>
        )
    }
}
