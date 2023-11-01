import React, { Component } from 'react'

export default class Sort extends Component {

    changeOption = (event) => {
        this.props.sort(event.target.value);
    }
    render() {

        // gọi hàm từ cha sang con rồi truyền giá trị sort cho thằng cha
        return (
            <>
                <select name="" id="" onChange={this.changeOption}>
                    <option value="">Sắp xếp</option>
                    <option value="name">Bằng chữ cái</option>
                    <option value="age">Tuổi tăng dần</option>
                </select>
            </>
        )
    }
}
