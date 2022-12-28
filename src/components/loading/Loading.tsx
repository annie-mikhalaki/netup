import React from 'react';
import classes from './Loading.module.css';

const Loading: React.FC = () => {
    return (
        <div  className={classes.Loading}>
            <div className={classes.center}>
                <div className={classes.LdsSpinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;