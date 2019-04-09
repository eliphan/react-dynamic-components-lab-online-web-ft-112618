// add Comment component here
import React, { Component } from 'react';
import BlogPost from './BlogPost.js';
import ColorBox from './ColorBox.js';

class Comment extends Component {
  render () {
    return  
      <div className="comment">
        {this.props.CommentText}
      </div>
      
  }
}
export default Comment;