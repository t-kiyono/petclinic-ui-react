import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { ReduxState } from 'store';
import { ErrorActions } from 'error';
import { Content } from 'components';
import Header from './Header';
import Modal from './Modal';

const Navbar = styled('nav')({
  borderTop: '4px solid #6db33f',
  backgroundColor: '#34302d',
  marginBottom: '0px',
  borderBottom: 0,
  borderLeft: 0,
  borderRight: 0,
});

const Main = styled('div')({
  marginRight: 'auto',
  marginLeft: 'auto',
});

const errorSelector = (state: ReduxState) => state.error;

const Layout: React.FC = props => {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar role="navigation">
        <Header />
      </Navbar>
      <Main>
        <Content>
          {props.children}
        </Content>
      </Main>
      { error.occures && (
        <Modal
          okButtonText="OK"
          title="Error"
          onOk={() => dispatch(ErrorActions.clearError())}
        >{error.message}</Modal>
      )}
    </>
  );
};

export default Layout;
