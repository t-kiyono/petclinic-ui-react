import styled from '@emotion/styled';
import { FlexDirectionProperty } from 'csstype';

interface FormGroupProps {
  direction?: FlexDirectionProperty | FlexDirectionProperty[];
}

const rowHeight = '34px';

const FormGroup = styled('div')<FormGroupProps>(
  {
    display: 'flex',
    marginBottom: '15px',
    height: rowHeight,
  },
  props => props.direction && { flexDirection: props.direction }
);

const FormLabel = styled('div')({
  width: '16%',
  height: '100%',
  fontWeight: 'bold',
  paddingLeft: '15px',
  paddingRight: '15px',
  textAlign: 'right',
  '& > label': {
    lineHeight: rowHeight,
    verticalAlign: 'middle',
  },
});

const FormInput = styled('div')({
  width: '84%',
  paddingLeft: '15px',
  paddingRight: '15px',
  '& > input': {
    display: 'inline-block',
    width: '100%',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: 1.428571429,
    color: '#555555',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: 0,
  },
  '& > span': {
    lineHeight: rowHeight,
  },
  '& > select': {
    height: rowHeight,
  },
});

export {
  FormGroup,
  FormLabel,
  FormInput,
}
