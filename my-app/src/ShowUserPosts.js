import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ShowUserPosts extends React.Component {
    constructor() {
        super()
        this.state={
            user : {},
            posts: []
        }
    }

    componentDidMount() {
        const id =this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=> {
            const user = response.data
            this.setState({
                user
            })
        }).catch((err)=> {
            alert(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userid=${id}`)
        .then((response)=> {
            const posts = response.data
            this.setState({
                posts
            })
        })
        .catch((err)=> {
            alert(err)
        })
    }

    render() {
        return (
            <div>
                <h1>USERNAME:{this.state.user.name}</h1>
                <h2>POSTS WRITTEN BY USER</h2>
                <ul>
                    {this.state.posts.map((post)=>{
                    return <li key = {post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ShowUserPosts