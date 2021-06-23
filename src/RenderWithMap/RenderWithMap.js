import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        { id: 1, name: 'iphone ', price: 1000, img: 'https://picsum.photos/id/237/200/300' },
        { id: 2, name: 'iphone 1', price: 2000, img: 'https://picsum.photos/id/20/200/200' },
        { id: 3, name: 'iphone 2', price: 3000, img: 'https://picsum.photos/id/30/200/200' },
        { id: 4, name: 'iphone 3', price: 4000, img: 'https://picsum.photos/id/40/200/200' },
    ]
    renderProduct = () => {
        // cách 1
        // let arrTagProduct=[];
        // for(let i=0;i<this.arrProduct.length;i++){
        //     //mỗi lần duyệt lấy ra 1 project
        //     let product=this.arrProduct[i];
        //     let tagJSX=<tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img src={product.img} width={100} height={100} /></td>
        //     </tr>
        //     arrTagProduct.push(tagJSX);
        // }
        // return arrTagProduct; 

        //cách 2
        let arrResult = this.arrProduct.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} width={100} height={100} /></td>
            </tr>;
        });
        return arrResult;
    }
    render() {
        return <div className="container">
            <h3>danh sách sản phẩm </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>mã SP</th>
                        <th>tên SP</th>
                        <th>giá SP</th>
                        <th>hình ảnh SP</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProduct()}
                </tbody>
            </table>

        </div>
    }
}
