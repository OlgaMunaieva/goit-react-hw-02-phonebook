const ContactList = ({ data, onDelete }) => {
  console.log(onDelete);
  console.log(data);
  const { contacts, filter } = data;
  return (
    <ul>
      {!filter
        ? contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button onClick={() => onDelete({ id })}>Delete</button>
            </li>
          ))
        : contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
                <button onClick={() => onDelete({ id })}>Delete</button>
              </li>
            ))}
    </ul>
  );
};

export default ContactList;
