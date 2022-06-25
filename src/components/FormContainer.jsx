import React, { Component } from 'react';
import FormInput from './FormInput';
import Title from './Title';

export class FormContainer extends Component {
  render() {
    return (
      <div className="form-container">
        <Title title={'Notes App'} />
        <FormInput addNoteHandler={this.props.addNoteHandler} />
      </div>
    );
  }
}

export default FormContainer;
