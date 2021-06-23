import React, { Component } from 'react'
//import đường dẫn css ảnh hưởng toàn bộ ứng dụng 
// import './BaiTapChonXe.css';
//cách 2 :
import style from './BaiTapChonXe.module.css';

export default class BaiTapChonXe extends Component {

    state = {
        imgSrc: "./img/CarBasic/CarBasic/products/red-car.jpg"
    }

    handleChangeColor =(color) => {
        this.setState({
            imgSrc:`./img/CarBasic/CarBasic/products/${color}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} alt="..." />
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className={`card-header ${style.textgreen}`}>Exterior</div>
                            <div className="card-body">
                                <div className="row mt-2 border border-dark p-2" style={{ cursor: "pointer" }}>
                                    <div className="col-2">
                                        <img className="w-50" src="./img/CarBasic/CarBasic/icons/icon-black.jpg" alt="..." />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                       this.handleChangeColor('black')
                                    }}>
                                        Black coler
                                    </div>
                                </div>
                                <div className="row mt-2 border border-dark p-2" style={{ cursor: "pointer" }}>
                                    <div className="col-2">
                                        <img className="w-50" src="./img/CarBasic/CarBasic/icons/icon-red.jpg" alt="..." />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                       this.handleChangeColor('red')
                                    }}>
                                        red coler
                                    </div>
                                </div>
                                <div className="row mt-2 border border-dark p-2" style={{ cursor: "pointer" }}>
                                    <div className="col-2">
                                        <img className="w-50" src="./img/CarBasic/CarBasic/icons/icon-silver.jpg" alt="..." />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                        this.handleChangeColor('silver')
                                    }}>
                                        silver coler
                                    </div>
                                </div>
                                <div className="row mt-2 border border-dark p-2" style={{ cursor: "pointer" }}>
                                    <div className="col-2">
                                        <img className="w-50" src="./img/CarBasic/CarBasic/icons/icon-steel.jpg" alt="..." />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                        this.handleChangeColor('steel')
                                    }}>
                                        steel coler
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-red">Wheels</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
