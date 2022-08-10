import './button.styles.scss';

const Button = ({ handler, buttonText, buttonType, form }) => {
  return (
    <button
      form={form}
      className={`button button--${buttonType}`}
      onClick={handler}
    >
      {buttonText}
    </button>
  );
};

export default Button;
