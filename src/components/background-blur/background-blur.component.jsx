import './background-blur.styles.scss';

const BackgroundBlur = ({ isActive, handler }) => {
  return (
    <div
      className={isActive ? 'background-blur--active' : 'background-blur'}
      onClick={handler}
    ></div>
  );
};

export default BackgroundBlur;
