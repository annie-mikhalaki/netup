import classes from './MenuItem.module.css';

interface MenuItem {
  text: string;
  onMenuItemClick(): void;
}

const MenuItem = (props: MenuItem) => {
  return (
    <div className={classes.MenuItem} onClick={props.onMenuItemClick}>
      <img src='' alt='' />
      <span>{props.text}</span>
    </div>
  );
};

export default MenuItem;
