import React, { Component } from 'react';
import Title from './Title';
import Button from './Button';
import Note from './Note';

export class Archived extends Component {
  EmptyData() {
    return (
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>Archived Empty</h1>
    );
  }
  render() {
    return (
      <>
        <Title title={this.props.name} />
        {this.props.archived.length ? (
          <div className="notes-container">
            <div className="notes-list-container">
              {this.props.archived.map((note) => (
                <div key={note.id} className="notes-list">
                  <Note {...note} />
                  <div className="button-container">
                    <Button
                      onClick={() => this.props.removeArchivedHandler(note.id)}
                      name="Delete"
                      color="red"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <this.EmptyData />
        )}
      </>
    );
  }
}

export default Archived;
