import Contact from "./Contact";

const List = ({ contacts, displayConvo }) => {
  return contacts.map((contact) => (
    <Contact key={contact} name={contact} displayConvo={displayConvo} />
  ));
};

export default List;
