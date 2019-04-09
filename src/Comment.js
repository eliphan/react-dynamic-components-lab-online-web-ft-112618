// add Comment component here
import React, { Component } from 'react';
import BlogPost from './BlogPost.js'
import ColorBox from './ColorBox.js'

class Comment extends React.Component {
  render () {
    return  (
      <div>
      {this.props.CommentText}
      < BlogPost >
      </div>
      )
  }
}

export default Comment;