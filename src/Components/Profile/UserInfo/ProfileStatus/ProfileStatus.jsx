/* eslint-disable react/prop-types */
import React from 'react';
import '../UserInfo.scss';

export class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

  activateMode = () => {
    this.setState({editMode: true});
  }

  diactivateMode = () => {
    this.setState({editMode: false});
  }

  render () {
    const { status } = this.props;
    return (
      <div className="profileStatus">
        {!this.state.editMode
        ? <span className="profileStatus__value" onClick={this.activateMode}>{status}</span>
        : <div>
          <input
            type="text"
            className="profileStatus__input"
            value={status}
            onBlur={this.diactivateMode}
            autoFocus={true}
          />
          </div>
        }
        
      </div>
    );
  }
  
};
