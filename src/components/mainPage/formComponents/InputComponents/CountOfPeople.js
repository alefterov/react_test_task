import React, {Component} from 'react';
import styles from "./Count.module.css"
class CountOfPeople extends Component {



    render() {
        let style = {
            borderColor: this.props.numberError,

        };
        return(
            <div className={styles.count_container}>
                <label htmlFor="number_of_people">Number of people <span className={styles.require_label}>*</span></label>
                <input id="number_of_people" className={styles.form_input} style={style} type="text" placeholder="1-99"
                       onChange={this.props.changeCountOfPeople}
                       onFocus={this.props.focusCountOfPeople}
                       onBlur={this.props.blurCountOfPeople}
                       value={this.props.countOfPeople}
                />
                <p id="countErrorMessage" className={styles.not_valid_count}>{this.props.countErrorMessage}</p>
            </div>

        );
    }

}
export default CountOfPeople;