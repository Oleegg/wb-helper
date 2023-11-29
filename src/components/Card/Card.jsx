import "./Card.css";

const Card = (props) => {
  const index = props.index;
  const { image, article, position, delivery_time, url } = props.data;
  const name = props.data.subject.name;

  return (
    <div className={index % 2 !== 0 ? "card" : "card white"}>
      <div className="card__number">{index}</div>
      <img src={image} alt={name} className="card__img" />
      <div className="card__article">
        <a href={url} target="_blanc">
          <div className="card__article-link"></div>
        </a>
        {article}
        <div
          className="card__article-copy"
          onClick={() => navigator.clipboard.writeText(`${article}`)}
        ></div>
      </div>
      <div className="card__position">{position}</div>
      <div className="card__price">
        2001 <span>&#8381;</span>
      </div>
      <div className="card__category">бытовая техника</div>
      <div className="card__delivery_time">{delivery_time} ч</div>
    </div>
  );
};

export default Card;
