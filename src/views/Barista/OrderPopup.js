import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import Beverage from './Beverage';
import Status from './Status';

function OrderPopup(props) {
    const [info, setInfo] = useState(props.info);

    useEffect(() => {
        setInfo(props.info);
    }, [props.info]);

    return (
        <div>
            <div style={header}>
                <DialogContent id="max-width-dialog-title">
                    <div style={idStyle}>#<span style={bold}>{info.id}</span></div>
                    <div style={timeStyle}>
                        Ordered at <span style={bold}>{info.time}</span>
                    </div> 
                    <div style={bottomInfo}>
                        <div style={meetingRoomStyle}>Meeting Room <span style={bold}>{info.meetingRoom}</span></div>
                        <Status websocket={props.websocket} handleOrderClose={props.handleClose} info={info} /> 
                    </div>
                </DialogContent>
            </div>
            <div style={body}> 
                <DialogContent>
                    {info.beverages.map((beverage, i) => {
                        return <Beverage key={i} info={beverage} />
                    })}
                </DialogContent>
                <DialogActions>
                    <Button style={closeButton} onClick={props.handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </div>
        </div>
    );
}

/* CSS */

const header = {
    backgroundColor: '#27496D',
    color: '#f3f3f3',
    fontSize: '24px'
};

const body = {
    backgroundColor: '#FFECD0'
};

const bottomInfo = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '10px'
};

const idStyle = {
    fontSize: '22px',
    paddingLeft: '2px'
};

const meetingRoomStyle = {
    fontSize: '34px',
    paddingTop: '10px'
};

const timeStyle = {
    padding: '10px 2px',
};

const closeButton = {
    color: "#27496D"
};

const bold = {
    fontWeight: '700'
};


export default OrderPopup;