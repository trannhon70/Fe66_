import React, { Component } from 'react'

export default class HendleVent extends Component {
    //khai báo phương thức 
    showMessage =()=>{
        alert('hello nhơn đẹp trai ')
    }

    showTitles =(Lop) =>{
        console.log(`hello ${Lop}`);

    }
    render() {
        //khai báo hàm
        const handleClick =(event) => {
            alert('hello world')
            document.querySelector('#btnClick').style.backgroundColor = 'blue';
        }

        return (
            <div className="container">
          
                <button id="btnClick" onClick={handleClick}>Click me</button>
            
                <button  onClick={() =>{
                   this.showTitles('fe 66')
                }}>show me</button>
            </div>
        )
    }
}
