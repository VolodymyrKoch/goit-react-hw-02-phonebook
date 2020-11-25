import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  // state = {
  //   name: '',
  //   number: '',
  // };
  render() {
    console.log(this.props);
    return (
      <>
        {/* <div>
          <form action="submit" clas="form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputName}
            />
            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.props.handleInputName}
            />
          </form>
          <button type="button" onClick={this.props.handleSubmit}>
            Add contacts
          </button>
        </div> */}
      </>
    );
  }
}

export default ContactForm;
