import "./Regions.css";

const Regions = ({ regions }) => {
  if (!regions || !regions.length) {
    return <p>no data cities</p>;
  }
  return (
    <div className="regions">
      {regions.map((region) => (
        <div key={region.id} className="region">
          <p className="region__name">{region.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Regions;
