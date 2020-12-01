import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className={s.status}>
        {!this.state.editMode && (
          <div onDoubleClick={this.activateEditMode} className={s.statusText}>
            {this.props.status}
          </div>
        )}
        {this.state.editMode && (
          <div className={s.statusSet}>
            <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
            <button onClick={this.deactivateEditMode}>save</button>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
