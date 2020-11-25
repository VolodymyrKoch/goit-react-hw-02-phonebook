import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import ContactForm from './components/ContactForm/ContactForm.js';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contactItem =>
      contactItem.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  handleDelete = id => {
    const { contacts } = this.state;
    const obj = contacts.find(el => el.id === id);
    const index = contacts.indexOf(obj);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts.slice(0, index),
        ...prevState.contacts.slice(index + 1),
      ],
    }));
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contacts = [...this.state.contacts];
    console.log(contacts);
    const index = contacts.findIndex(el => el.name === this.state.name);
    if (this.state.name && index === -1) {
      const contactItem = {
        id: uuidv4(),
        name: this.state.name,
        number: this.state.number,
      };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contactItem],
        };
      });
    } else alert(`${this.state.name} is already in contacts.`);
  };

  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <div>
            <form action="submit" clas="form" onSubmit={this.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label htmlFor="number">Number</label>
              <input
                type="text"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
              <button type="submit">Add contacts</button>
            </form>

            <label htmlFor="filter">Find contacts by name</label>
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleChange}
            />
          </div>
          {/* <ContactForm */}
          {/* handleInputName={this.handleChange}
            handleSubmit={this.handleSubmit}
          /> */}

          <h2>Contacts</h2>
          {this.state.name}
          {/* <Filter  /> */}
          {/* <ContactList  /> */}

          <ul>
            {this.handleFilter().map(elem => {
              return (
                <li key={elem.id}>
                  <p>
                    {elem.name} : {elem.number}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      this.handleDelete(elem.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
export default App;
