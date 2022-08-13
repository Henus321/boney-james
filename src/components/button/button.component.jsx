import PropTypes from 'prop-types';

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

Button.propTypes = {
  handler: PropTypes.func,
  buttonText: PropTypes.string,
  buttonType: PropTypes.string,
  form: PropTypes.string,
};

export default Button;
