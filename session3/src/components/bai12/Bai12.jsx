import React, { Component } from 'react'

export default class Bai12 extends Component {

    constructor() {
        super()
        this.state = {
            listImg: [
                "/images/anh1.jpg",
                "/images/anh2.jpg",
                "/images/anh3.jpg",
                "/images/anh4.jpg",
                "/images/anh5.jpg",
                "/images/anh6.jpg",
                "/images/anh7.jpg",
                "/images/anh8.jpg",
            ],
            currentImg: 0
        }
    }

    changeImage = (status) => {
        switch (status) {
            case 0:
                if (this.state.currentImg > 0) {
                    this.setState({
                        currentImg: this.state.currentImg - 1
                    })
                } else {
                    this.setState({
                        currentImg: this.state.listImg.length - 1
                    })
                }
                break
            case 1:
                if (this.state.currentImg < this.state.listImg.length - 1) {
                    this.setState({
                        currentImg: this.state.currentImg + 1
                    })
                } else {
                    this.setState({
                        currentImg: 0
                    })
                }
                break
        }
    }

    render() {
        return (
            <div>
                <div>
                    <img width={200} src={this.state.listImg[this.state.currentImg]} alt="img" />
                </div>
                <div>
                    <button onClick={() => this.changeImage(0)}>previous</button>
                    <button onClick={() => this.changeImage(1)}>next</button>
                </div>
            </div>
        )
    }
}
