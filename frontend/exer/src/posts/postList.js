import React, { Component } from 'react';
import postData from '../data/posts.json';

class postList extends Component {
    render() {
      return <div className="App">
          <Nav />
          <section className="App-main">
            <Post nickname="Chris" avatar= {example1} caption="I wish I could go outside!" image= {example1}/>
            <Post nickname="Not Chris" avatar= {example2} caption="I wish I was Chris" image= {example2}/>

            {/* more posts */}
          </section>
        </div>;
    }
  }
export default postList;
