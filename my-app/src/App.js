import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Home from './Home'
import Posts from './Posts'
import Users from './Users'
import ShowUserPosts from './ShowUserPosts';
import Post from './Post';

class App extends React.Component {
  constructor() {
    super()
    this.state={

    }
  }

  render() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/">Home</Link> |
      <Link to="/users">Users</Link> |
      <Link to="/posts">Posts</Link>
      <Route path="/" component={Home} exact={true} />
      <Route path="/users" component={Users} exact={true}/>
      <Route path="/users/:id" component={ShowUserPosts} exact={true}/>
      <Route path="/posts" component={Posts} exact={true}/>
      <Route path="/posts/:id" component={Post}  />
    </div>
    </BrowserRouter>
  )
}
}

export default App;
