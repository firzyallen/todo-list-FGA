import React, { Component } from 'react';
import Button from './Button';
import Note from './Note';

export class Notes extends Component {
  EmptyData() {
    return <h1 style={{ textAlign: 'center' }}>Please Add New Note!</h1>;
  }

  render() {
    return (
      <>
        {this.props.notes.length ? (
          <div className="notes-list-container">
            {this.props.notes.map((note) => (
              <div key={note.id} className="notes-list">
                <Note {...note} />
                <div className="button-container">
                  <Button
                    onClick={() => this.props.removeNoteHandler(note.id)}
                    name="Delete"
                    color="red"
                  />
                  <Button
                    onClick={() => this.props.addArchiveHandler(note.id, note)}
                    name="Archive"
                    color="grey"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <this.EmptyData />
        )}
      </>
    );
  }
}

export default Notes;
