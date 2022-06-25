import React, { Component } from 'react';
import FormContainer from './components/FormContainer';
import NotesContainer from './components/NotesContainer';
import { getInitialData } from './utils/data';
import archived from './utils/archived';

import './styles/index.css';
import Button from './components/Button';
import Archived from './components/Archived';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archived,
      isArchivedOpen: false,
      dark: false,
    };
  }

  addNoteHandler = (data) => {
    this.setState((prev) => ({
      notes: [...prev.notes, data],
    }));
  };

  

  archiveHandler = (data) => {
    this.setState((prev) => ({
      archived: [...prev.archived, data],
    }));
  };

  addArchiveHandler = (id, data) => {
    this.archiveHandler(data);
    this.removeNoteHandler(id);
  };

  removeNoteHandler = (id) => {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes: newNotes,
    });
  };

  removeArchivedHandler = (id) => {
    const newArchived = this.state.archived.filter((note) => note.id !== id);
    this.setState({
      archived: newArchived,
    });
  };

  isArchivedOpenHandler = () =>
    this.setState((prev) => ({
      isArchivedOpen: !prev.isArchivedOpen,
    }));

  isDark = {
    backgroundColor: 'rgb(71, 71, 71)',
    color: 'white',
  };

  render() {
    return (
      <div className="container" style={this.state.dark ? this.isDark : {}}>
        <FormContainer addNoteHandler={this.addNoteHandler} />
        <NotesContainer
          name="Notes List"
          notes={this.state.notes}
          removeNoteHandler={this.removeNoteHandler}
          addArchiveHandler={this.addArchiveHandler}
        />

        <Button name={'Archived'} onClick={this.isArchivedOpenHandler} />
        {this.state.isArchivedOpen && (
          <Archived
            archived={this.state.archived}
            name="Archived Notes"
            removeArchivedHandler={this.removeArchivedHandler}
          />
        )}
        <button
          className="theme"
          onClick={() =>
            this.setState((prev) => ({
              dark: !prev.dark,
            }))
          }
          style={this.state.dark ? this.isDark : {}}
        >
          {this.state.dark ? 'Light' : 'Dark'}
        </button>
      </div>
    );
  }
}

export default App;
