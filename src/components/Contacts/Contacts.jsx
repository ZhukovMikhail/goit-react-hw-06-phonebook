import { StyledContList, StyledItem, StyledButton } from './Contacts.styled';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <StyledContList>
      {contacts.map(contact => {
        return (
          <StyledItem key={contact.id} id={contact.id}>
            <div>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </div>
            <StyledButton type="button" onClick={onDelete}>
              delete
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledContList>
  );
};

Contacts.prototype = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
