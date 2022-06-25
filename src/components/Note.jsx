import React, { Component } from 'react';

export class Note extends Component {
  render() {
    return (
      <div className="note">
        <div className="note-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="note-body">
          <p>{this.props.body}</p>
        </div>
        <div className="note-created">
          <span>Created At: {this.props.createdAt}</span>
        </div>
      </div>
    );
  }
}

export default Note;
