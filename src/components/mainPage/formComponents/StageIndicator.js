import React, {Component} from 'react';
import classes from "./Indicator.module.css";

class StageIndicator extends Component {
    render() {
        return (
            <div className={classes.indicator_container}>
                <h1 className={classes.stages_title}>
                    Your first project
                </h1>
                <div className={classes.steps}>
                    <div className={classes.step_number}>1</div>
                    <div className={classes.between_numbers}></div>
                    <div className={classes.step_number}>2</div>
                    <div className={classes.between_numbers}></div>
                    <div className={classes.step_number + " " + classes.active}>3</div>
                </div>
            </div>
        );
    }

}

export default StageIndicator;