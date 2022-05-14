import './App.styled.jsx';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contactSlice';
import { Container } from 'App.styled';
import { MyForm } from 'components/Form/Form.jsx';
import { Contacts } from 'components/Contacts/Contacts.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDelete = e => {
    const chengedContacts = contacts.filter(
      contact => contact.id !== e.currentTarget.parentElement.id
    );
    dispatch(deleteContact(chengedContacts));
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  });
  return (
    <Container>
      <h1>Phonebook</h1>
      <MyForm />
      <h2>Contacts:</h2>
      <Filter />
      <Contacts
        contacts={filter !== '' ? filteredContacts : contacts}
        onDelete={handleDelete}
      ></Contacts>
    </Container>
  );
};

export default App;

App.propTypes = {
  data: PropTypes.object,
};
