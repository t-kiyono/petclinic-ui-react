import React from 'react';
import { Link, BrowserRouterProps } from 'react-router-dom';
import { useLocation } from 'react-router';
import styled from '@emotion/styled';
import { faHome, faSearch, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from 'components';
import brandImg from 'assets/images/spring-logo-dataflow.png';

const Bar = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
});

const Brand = styled(Link)({
  background: `url(${brandImg}) -1px -1px no-repeat`,
  width: '229px',
  height: '46px',
  margin: '12px 0 6px',
  display: 'inline-block',
  ':hover span': {
    background: `url(${brandImg}) -1px -48px no-repeat`,
    width: '229px',
    height: '46px',
    display: 'block',
  },
});

const Menu = styled('ul')({
  paddingLeft: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  height: '76px',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  paddingRight: '15px',
});

type MenuItemProps = BrowserRouterProps & { location: string, to: string };

const MenuItem = styled(Link)<MenuItemProps>(
  {
    display: 'block',
    color: '#f1f1f1',
    fontFamily: 'montserratregular, sans-serif',
    textShadow: 'none',
    fontSize: '14px',
    padding: '28px 20px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    ':hover': {
      backgroundColor: '#6db33f',
    },
  },
  props => {
    return props.location.split('/')[1] === props.to.toString().split('/')[1] && { backgroundColor: '#6db33f' };
  }
);

const Icon = styled(FontAwesomeIcon)({
  marginRight: '6px',
});

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <Bar>
      <Brand to="/">
        <span />
      </Brand>
      <Menu>
        <li>
          <MenuItem to="/home" location={location.pathname}><Icon icon={faHome} />Home</MenuItem>
        </li>
        <li>
          <MenuItem to="/owners/find" location={location.pathname}><Icon icon={faSearch} />Find Owners</MenuItem>
        </li>
        <li>
          <MenuItem to="/vets" location={location.pathname}><Icon icon={faList} />Veterinarians</MenuItem>
        </li>
      </Menu>
    </Bar>
  );
};

export default Header;
