import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreate, updateNewMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => ({
  dialogPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessage: (body) => {
    dispatch(updateNewMessageActionCreator(body));
  },
  sendMessage: () => {
    dispatch(addMessageActionCreate());
  },
});

export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);
