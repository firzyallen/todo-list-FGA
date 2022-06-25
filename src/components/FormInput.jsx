import React, { Component } from 'react';
import Button from './Button';

export class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: {
        id: +new Date(),
        title: '',
        body: '',
        archived: false,
        createdAt: new Date().toLocaleString(),
      },
    };
  }

  onChangeHandler = (e) => {
    this.setState((prev) => ({
      note: { ...prev.note, [e.target.name]: e.target.value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.note.title || !this.state.note.body) {
      if (!this.state.note.title) {
        return alert('Please fill the Title');
      } else if (!this.state.note.body) {
        return alert('Please fill the Body');
      }
    }

    this.props.addNoteHandler(this.state.note);
    alert('Success added new Note!');
    this.setState({
      note: {
        id: +new Date(),
        title: '',
        body: '',
        archived: false,
        createdAt: new Date().toLocaleString(),
      },
    });
  };

  render() {
    return (
      <form className="form-input" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.note.title}
          onChange={this.onChangeHandler}
        />
        <textarea
          style={{ resize: 'none' }}
          name="body"
          value={this.state.note.body}
          placeholder="Your Note"
          onChange={this.onChangeHandler}
        />
        <Button type={'submit'} name="add" />
      </form>
    );
  }
}

export default FormInput;
