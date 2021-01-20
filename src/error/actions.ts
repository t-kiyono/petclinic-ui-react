import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export default {
  putError: actionCreator<string>('PUT_ERROR'),
  clearError: actionCreator('CLEAR_ERROR'),
}
