import "./Priority.css";

const priorityList = [
  {
    id: 1,
    text: "Molestie placerat auctor eu orci phasellus imperdiet quam risus suspendisse.",
  },
  {
    id: 2,
    text: "Eget",
  },
  {
    id: 3,
    text: "Nisl nisl condimentum enim non cursus eget sit leo. Nulla eu ipsum pellentesque aliquam non cursus donec. Morbi nam.",
  },
  {
    id: 4,
    text: "Eget gravida sit vel id enim euismod risus. Tellus.",
  },
  {
    id: 5,
    text: "Pellentesque urna sollicitudin augue condimentum. Et in amet porta eu semper quis volutpat volutpat platea. Nullam amet.",
  },
];

const Priority = () => {
  return (
    <div className="priority">
      <h3>Приоритет категорий</h3>
      <ul className="priority__list">
        {priorityList.map((el, i) => (
          <li
            className={
              i % 2 !== 0 ? "priority__item item-border" : "priority__item"
            }
            key={el.id}
          >
            <div className="item-number">{el.id}</div>
            <span>{el.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Priority;
