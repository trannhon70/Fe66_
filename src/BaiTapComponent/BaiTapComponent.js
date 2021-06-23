import React, { Component } from 'react'
import Header from './Header';
import BodyR from './BodyR';
import BodyL from './BodyL';
import Footer from './Footer';

export default class BaiTapComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12"><Header/></div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <BodyL/>
                    </div>
                    <div className="col-7">
                        <BodyR/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12"><Footer/></div>
                </div>
            </div>
        )
    }
}
