const ContactList = data => {
  const { contacts, filter } = data.data;
  return (
    <ul>
      {!filter
        ? contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))
        : contacts
            .filter(contact => contact.name.toLowerCase().includes(filter))
            .map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
    </ul>
  );
};

export default ContactList;
