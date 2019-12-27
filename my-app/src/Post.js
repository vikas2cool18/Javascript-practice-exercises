import React from 'react'
import axios from 'axios'

class Post extends React.Component {
    constructor() {
        super()
        this.state={
            post:{},
            userName: '',
            comments: []
        }
    }

    componentDidMount() {
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=> {
            const post=response.data
            const userId=response.data.userId
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response)=> {
            const userName = response.data.name
            this.setState({
                userName
            })
        }).catch((err)=> {
            alert(err)
        })
            this.setState({
                post
            })
        })
        .catch((err)=> {
            alert(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postid=${id}`)
        .then((response)=> {
            const comments=response.data
            this.setState({
                comments
            })
        })
    }

    render() {
    return (
        <div>
        <h1>User Name: {this.state.userName}</h1>
        <h1>Title: {this.state.post.title}</h1>
        <h2>BODY:</h2>
        <h2>{this.state.post.body}</h2>
        <hr />
        <h2>Comments</h2>
        <ul>
            {this.state.comments.map((comment)=> {
            return <li>{comment.body}</li>
            })}
        </ul>
        </div>
    )
}
}

export default Post