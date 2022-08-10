import './button.styles.scss';

const Button = ({ handler, buttonText, type = 'ckeckout' }) => {
  return (
    <button className={`button button--${type}`} onClick={handler}>
      {buttonText}
    </button>
  );
};

export default Button;
