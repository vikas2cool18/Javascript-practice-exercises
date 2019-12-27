import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Users extends React.Component {
    constructor() {
        super()
        this.state={
            users : []
        }
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            const users=response.data
            this.setState({
                users
            })
        })
        .catch((err)=> {
            this.setState({
                users:[]
            })
            alert(err)
        })
    }

    render() {
        return (
            <div>
                <h1>Users List : {this.state.users.length}</h1>
                <ul>
                    {this.state.users.map((user)=> {
                    return <li><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Users