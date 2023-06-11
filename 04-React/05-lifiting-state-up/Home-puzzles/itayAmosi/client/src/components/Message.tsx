import "../style/message.scss"

const Message = () => {

  return (
    <div className={`alert alert-`}>
      <h1>Uoch!!!!</h1>
    </div>
  );
};

Message.defaultPros = {
  variant: "info",
};

export default Message;
