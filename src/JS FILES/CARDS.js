import './cards.css';
import Hair from './Hair';
function Card(props) {
    return (
      <div className="card">
        <img className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Hair />
        </div>
      </div>
    );
}
function Card1(props) {
    return (
      <div className="card">
        <img className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    );
}

function CardList() {
  return (
    <div className="row">
      <div className="col-sm-3">
        <Card
          //featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
          title="Hair"
          description=""
          link="https://sebhastian.com/interactive-react-form"
        />
      </div>
      <div className="col-sm-3">
        <Card1
          //featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
          title="Eyes"
          description=""
          link="https://sebhastian.com/babel-guide"
        />
      </div>
      <div className="col-sm-3">
        <Card
          //featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
          title="Nose"
          description=""
          link="https://sebhastian.com/babel-guide"
        />
      </div>
      <div className="col-sm-3">
        <Card
         // featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
          title="Mouth"
          description=""
          link="https://sebhastian.com/js-before-react"
        />
      </div>
    </div>
  );
}

export default CardList;