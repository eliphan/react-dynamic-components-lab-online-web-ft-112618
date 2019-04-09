// add Comment component here
import React, { Component } from 'react';
import BlogPost from './BlogPost.js';
import ColorBox from './ColorBox.js';

export default class Comment extends React.Component {
  render () {
    return  (
      <div className="comment">
        {this.props.CommentText}
        < BlogPost />
      </div>
      )
  }
}

