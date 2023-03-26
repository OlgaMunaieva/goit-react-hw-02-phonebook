import { ContainerItem, ContainerList } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ data, onDelete }) => {
  const { contacts, filter } = data;
  return (
    <ContainerList>
      {!filter
        ? contacts.map(({ id, name, number }) => (
            <ContainerItem key={id}>
              {name}: {number}
              <button onClick={() => onDelete({ id })}>Delete</button>
            </ContainerItem>
          ))
        : contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(({ id, name, number }) => (
              <ContainerItem key={id}>
                {name}: {number}
                <button onClick={() => onDelete({ id })}>Delete</button>
              </ContainerItem>
            ))}
    </ContainerList>
  );
};

ContactList.propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
