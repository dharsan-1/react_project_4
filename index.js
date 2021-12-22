function Notification(props) {
  const { className, imgSrc, message } = props;
  const containerClass = `notification-con ${className}`;
  return (
    <div className={containerClass}>
      <div>
        <img className="icon" src={imgSrc} />
        <p className="msg-1">{message}</p>
      </div>
    </div>
  );
}

const element = (
  <div className="background">
    <h1 className="heading">notification</h1>
    <Notification
      className="first_back"
      imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      message="information message"
    />
    <Notification
      className="sec_back"
      imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      message="success message"
    />
    <Notification
      className="third_back"
      imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      message="warning message"
    />
    <Notification
      className="fourth_back"
      imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      message="error message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
