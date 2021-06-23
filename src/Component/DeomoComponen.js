//code tạo ra component rcc
import React, { Component } from 'react'

export default class DeomoComponen extends Component {

    //phương thức render tạo ra giao diện của thẻ 
    //nội dung của component phải được bao phủ bởi 1 thẻ : thưởng dùng thẻ div

    render() {
        return (
            <div className="container-fluid">
                <div className="content m-2 p-2 bg-dark text-white">
                     <p className="display-4">title</p>
                     <p>content</p>
                </div>
            </div>
        )
    }
}
