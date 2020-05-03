import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import postOneExample from '../assets/postOneExample.jpg';
import postTwoExample from '../assets/postTwoExample.jpg';

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMessage: ''
    }
  }

  componentDidMount() {
    axios.get('api/posts')
    .then(response => {
      console.log(response);
      this.setState({posts: response.data});
    })
    .catch(error => {
      console.log(error);
      this.setState({errorMessage: 'Error retrieving data'});
    });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return(
      <div className="App">
      <section className="App-main">
        {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }
        {errorMessage ? <Alert variant="danger"><p>{errorMessage}</p></Alert> : null}

        <Post nickname="Chris" avatar= {postOneExample} caption="I wish I could go outside!" image= {postOneExample}/>
         <Post nickname="Not Chris" avatar= {postTwoExample} caption="I wish I was Chris" image= {postTwoExample}/>

      
        {/* more posts */}
        </section>
      </div>
    );
  }
}

export default PostList;
