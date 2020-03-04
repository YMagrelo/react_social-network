import React from 'react';
import './Dialogs.scss';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className="dialogs__dialog">
          <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
    <div className="dialogs__message">{props.message}</div>
    )
}

export const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs__list">
                <DialogsItem name="Brad" id='1'/>
                <DialogsItem name="Pitt" id='2'/>
                <DialogsItem name="Bob" id='3'/>
                <DialogsItem name="Leonardo" id='4'/>
                <DialogsItem name="Sussy" id='5'/> 
            </div>
            <div className="dialogs__messages">
                <Message message="Hello, how are you?"/>
                <Message message="Hello, I'm fine"/>
                <Message message="Do you have some chees?"/>
            </div>
        </div>
    )
}

