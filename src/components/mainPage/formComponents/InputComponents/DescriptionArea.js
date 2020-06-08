import React, {Component} from 'react';
import styles from "./Description.module.css"
class DescriptionArea extends Component {


    render() {
        let style = {
            borderColor: this.props.descriptionError,

        };
        return(
            <div className={styles.description_container}>
                <label htmlFor="description_area">Description <span className={styles.require_label}>*</span></label>
                <textarea id="description_area"
                          className={styles.form_input_area}
                          style={style}
                          placeholder="Type text"
                          onChange={this.props.changeDescriptionArea}
                          onFocus={this.props.focusDescriptionArea}
                          onBlur={this.props.blurDescriptionArea}
                          value={this.props.descriptionArea}
                ></textarea>
                <p id="descriptionErrorMessage" className={styles.not_valid_description}>{this.props.descriptionErrorMessage}</p>
            </div>
        );
    }

}
export default DescriptionArea;