import styled from '@emotion/styled';

const Button = styled('button')({
  display: 'inline-block',
  marginBottom: 0,
  fontFamily: 'inherit',
  fontWeight: 'normal',
  textAlign: 'center',
  verticalAlign: 'middle',
  touchAction: 'manipulation',
  cursor: 'pointer',
  border: '2px solid',
  whiteSpace: 'nowrap',
  padding: '6px 12px',
  fontSize: '14px',
  lineHeight: '1.428571429',
  borderRadius: 0,
  userSelect: 'none',
  color: '#f1f1f1',
  backgroundColor: '#34302D',
  borderColor: '#6db33f',
  ':hover': {
    backgroundColor: '#34302D',
    borderColor: '#34302D',
  },
});

export default Button;
