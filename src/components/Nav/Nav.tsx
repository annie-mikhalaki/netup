import classes from './Nav.module.css';
import MenuItem from '../MenuItem/MenuItem';
import Logo from '../../icons/Logo';
import SearchIcon from '../../icons/SearchIcon';
import UserIcon from '../../icons/UserIcon';

interface Nav {
  onMenuItemClick(title: string): void;
}

const menuItems = [
  { title: 'Discover' },
  { title: 'Live TV' },
  { title: 'TV Shows' },
  { title: 'Movies' },
  { title: 'My Stuff' },
];

const Nav = ({ onMenuItemClick }: Nav) => {
  return (
    <div className={classes.Nav}>
      <Logo />
      <div className={classes.Menu}>
        {menuItems.map((item, index) => (
          <MenuItem key={`menuItem_${index}`} text={item.title} onMenuItemClick={() => onMenuItemClick(item.title)} />
        ))}
      </div>
      <div className={classes.SearchUserIcons}>
        <SearchIcon />
        <UserIcon />
      </div>
    </div>
  );
};

export default Nav;
