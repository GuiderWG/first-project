import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };

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
            <input autoFocus onBlur={this.deactivateEditMode} type="text" value={this.props.status} />
            <button onClick={this.deactivateEditMode}>save</button>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
