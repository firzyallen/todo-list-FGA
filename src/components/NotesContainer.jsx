import React, { Component } from 'react';
import Notes from './Notes';
import Title from './Title';

export class NotesContainer extends Component {
  render() {
    return (
      <div className="notes-container">
        <Title title={this.props.name} />
        <Notes
          notes={this.props.notes}
          removeNoteHandler={this.props.removeNoteHandler}
          addArchiveHandler={this.props.addArchiveHandler}
        />
      </div>
    );
  }
}

export default NotesContainer;
