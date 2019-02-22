import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './components/table/table';
import Loading from './components/loadig/loadig';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userTable: {
                name: "Users",
                backgroundColor: "teal",
                items: ["name", "username", "email", "phone"],
                component: "user",
            },
            postTable: {
                name: "Posts",
                backgroundColor: "blue",
                items: ["title", "body"],
                component: "post",
            },
            posts: null,
            users: null,
            userLoading: false,
            postLoading: false
        };

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => {
                this.setState({ posts: res.data , postLoading:true});
            }).catch(error => {
                console.log(error.response)
            });

        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                this.setState({ users: res.data , userLoading:true});
            }).catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <div className="ui" >
                <div>
                    <div className="ui centered grid">
                        {(this.state.users && this.state.userLoading) ?
                            <Table tableParam={this.state.userTable} elemenents={this.state.users} />
                            :
                            < Loading title="Users"/>}
                    </div>
                    <div className="ui centered grid">
                    {(this.state.posts && this.state.postLoading) ?
                        <Table tableParam={this.state.postTable} elemenents={this.state.posts} />
                    : < Loading title="Posts"/>}
                    </div>
                </div> 
            </div>
        )
    }
}

ReactDOM.render(< App />, document.getElementById("root"));