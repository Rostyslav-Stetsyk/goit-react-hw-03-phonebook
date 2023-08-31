import { ContactListStyled, ListElement } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ListElement key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" id={id} onClick={e => onDelete(e.target.id)}>
            Delete
          </button>
        </ListElement>
      ))}
    </ContactListStyled>
  );
};
