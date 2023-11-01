import React, { Component } from 'react'

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
        }
    }
    changeValue = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    render() {
        console.log("render");
        return (
            <>
                <input
                    type="text"
                    onChange={this.changeValue}
                />
                <button onClick={() => this.props.search(this.state.search)}>Tìm kiếm</button>
            </>
        )
    }
}

