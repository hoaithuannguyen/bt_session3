import React, { Component } from 'react'
import Search from './components/Search'
import Sort from './components/Sort'
import ListStudent from './components/ListStudent'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            students: [
                {
                    name: "Hào",
                    age: 20,
                    id: "001"
                },
                {
                    name: "Minh",
                    age: 10,
                    id: "002"
                },
                {
                    name: "Dung",
                    age: 28,
                    id: "003"
                },
                {
                    name: "Tuan",
                    age: 22,
                    id: "004"
                }
            ],
            searchValue: "",
            sort: ""
        }
    }
    // khởi tạo Function
    searchDir = (value) => {
        this.setState({
            searchValue: value,
        })
    }
    //khởi tạo function soft
    sortBy = (sortBy) => {
        this.setState({
            sort: sortBy
        })
    }
    render() {
        // logic xử lý tìm kiếm
        let student = [];

        if (this.state.searchValue != "") {
            let result = this.state.students.filter((item) => {
                return item.name.indexOf(this.state.searchValue) != -1;
            })
            if (result.length == 0) {
                student = [...this.state.students];
            } else {
                student = result;
            }
        } else {
            student = this.state.students;
        }
        // logic xử lý sort sắp xếp
        if (this.state.sort != "") {
            if (this.state.sort == "name") {
                let result = this.state.students.sort((a, b) => {
                    if (a.name.split(" ")[a.name.split(" ").length - 1] > b.name.split(" ")[b.name.split(" ").length - 1]) {
                        return 1
                    } else if (a.name.split(" ")[a.name.split(" ").length - 1] == b.name.split(" ")[b.name.split(" ").length - 1]) {
                        return 0
                    } else {
                        return -1
                    }
                }
                )
                student = result;
            } else {
                let result = this.state.students.sort((a, b) => {
                    return a.age - b.age;
                })
                student = result;
            }
        }
        return (
            <>
                {/* đưa các component con vào */}
                <Search search={this.searchDir}></Search>
                <Sort sort={this.sortBy}></Sort>
                <ListStudent student={student}></ListStudent>
            </>
        )
    }
}
