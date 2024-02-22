import { Component } from "react";
import { PropTypes } from "prop-types";

export default class NewsItems extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    newsurl: PropTypes.string,
    time: PropTypes.string,
    source: PropTypes.string,
  };

  render() {
    let { title, description, img, newsurl, time, source } = this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div>
            <span
              className="badge rounded-pill bg-danger"
              style={{ position: 'absolute', right:'0' }}
            >
              {source}
            </span>
          </div>
          <img src={img} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <small className="text-body-secondary">
              {new Date(time).toUTCString()}
            </small>
            <p className="card-text">{description}...</p>

            <a
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
