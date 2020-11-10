import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ isOnline, isAdmin, userData }) => {
  return (
    <nav className={styles.headerContainer}>
      <Button to='/home'>Home</Button>
      <Button to='/community'>Community</Button>
      <Button to='/social'>Social</Button>
      <Button to='/market'>Market</Button>


      {!isOnline && <Button to='/login'>Login</Button>}
      {!isOnline && <Button to='/signup'>Sign Up</Button>}

      {isOnline && isAdmin && <Button to='/project/add'>New Project</Button>}
      {isOnline && isAdmin && <Button to='/company/add'>New Company</Button>}
      {isOnline && isAdmin && <Button to='/applications'>Applications</Button>}

      {isOnline && (<span className={styles.loginName}>{userData.fullname} ({userData.email} / {userData.userGroup})</span>)}
    </nav>
  );
};


Header.propTypes = {
  isOnline: PropTypes.bool,
  isAdmin: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isOnline: Selectors.getIsOnline(state),
  isAdmin: Selectors.getIsAdmin(state),
  userData: Selectors.getUserData(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
