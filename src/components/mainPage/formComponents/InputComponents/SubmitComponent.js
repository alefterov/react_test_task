import React, {Component} from 'react';
import styles from "./Submit.module.css"
class SubmitComponent extends Component {


    render() {
        return(
            <div className={styles.submit_container}>
                <input type="submit" value="Submit"/>
            </div>
        );
    }

}
export default SubmitComponent;