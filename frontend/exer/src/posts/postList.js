import React, { Component } from 'react';
import postData from '../data/posts.json';

class postList extends Component {
    render(){
    return (
        <div>
            {postData.map(() => {
                
            })} 
        </div>
    )
    }//end render()
}//end component()

export default postList;
