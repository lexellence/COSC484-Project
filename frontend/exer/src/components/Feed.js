//Rename to feed.js
import React, { Component } from "react";
import "./Post.css";


class Feed extends Component {
    //The like counter
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
        this.incrementLikes = this.incrementLikes.bind(this);
      }
    
      incrementLikes = () => {
        const { count } = this.state;
       
        this.setState({
          count: count + 1
        });
      }
    
      render() {
       
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;
        return (
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src={avatar} alt={nickname} />
                        </div>
                        <div className="Post-user-nickname">
                            <span>{nickname}</span>
                        </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image-bg">
                        <img alt={caption} src={image} />
                        <button className="button" onClick={() => this.incrementLikes()}><span role="img">❤️</span>Likes: {this.state.count}</button>
                    </div>
                </div>
                <div className="Post-caption">
                    <strong>{nickname}</strong> {caption}
                </div>
                <form>
                </form>
            </article>

        );
    }
}

export default Feed;

