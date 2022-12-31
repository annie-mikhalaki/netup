import classes from './Button.module.css';

interface Button {
  text: string;
  onClick(): void;
}

const Button = (props: Button) => {
  return (
    <button className={classes.Button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
