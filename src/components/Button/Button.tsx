import classes from './Button.module.css';

interface Button {
  children: string;
  onClick(): void;
}

const Button = (props: Button) => {
  return (
    <button className={classes.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
