/* eslint-disable react/prop-types */
import React from 'react';
import '../UserInfo.scss';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateMode = () => {
    this.setState({editMode: true});
  }

  diactivateMode = () => {
    this.setState({editMode: false});
    this.props.updateStatusProfileThunk(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  }

  render () {
    const { status } = this.props;
    return (
      <div className="profileStatus">
        {!this.state.editMode
        ? <span className="profileStatus__value" onClick={this.activateMode}>{status || 'status is not defined'}</span>
        : <div>
          <input
            type="text"
            className="profileStatus__input"
            value={this.state.status}
            onBlur={this.diactivateMode}
            autoFocus={true}
            onChange={this.onStatusChange}
          />
          </div>
        }
        
      </div>
    );
  }
  
};
