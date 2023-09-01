import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  onSubmitForm = contact => {
    if (this.state.contacts.some(el => el.number === contact.number)) {
      alert(
        `This number (${
          contact.number
        }) is already in the contact list, recorded as ${
          this.state.contacts.find(el => el.number === contact.number).name
        }`
      );
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onChange = filter => {
    this.setState({ filter: filter.toLowerCase() });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.onSubmitForm} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onChange={this.onChange} />
          {this.state.contacts.length ? (
            <ContactList
              contacts={this.state.contacts.filter(el =>
                el.name.toLowerCase().includes(this.state.filter)
              )}
              onDelete={this.onDelete}
            />
          ) : (
            <p>No contacts</p>
          )}
        </Section>
      </>
    );
  }
}
