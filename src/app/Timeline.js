import "@/app/timeline.scss";
const Timeline = () => {
  return (
    <ul className="timeline timeline-vertical">
      <li>
        <div className="timeline--circle">
          {" "}
          <i />
        </div>
        <div className="timeline--description">Web development</div>
      </li>
      <li>
        <div className="timeline--circle">
          {" "}
          <i />
        </div>
        <div className="timeline--description">Seo optimization</div>
      </li>
      <li>
        <div className="timeline--circle">
          {" "}
          <i />
        </div>
        <div className="timeline--description">Logo design</div>
      </li>
      <li>
        <div className="timeline--circle">
          {" "}
          <i />
        </div>
        <div className="timeline--description">Graphics design</div>
      </li>
      <li>
        <div className="timeline--circle--last">
          {" "}
          <i />
        </div>
        <div className="timeline--description">App development</div>
      </li>
    </ul>
  );
};

export default Timeline;
