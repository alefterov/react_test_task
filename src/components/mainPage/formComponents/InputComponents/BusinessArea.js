import React, {Component} from 'react';
import styles from "./Business.module.css"
class BusinessArea extends Component {


    render() {
        let style = {
            borderColor: this.props.businessError,

        };
        return(
            <div className={styles.business_container}>
                <label htmlFor="business_area">Business area <span className={styles.require_label}>*</span></label>
                <input id="business_area" className={styles.form_input} style={style} type="text" placeholder="Design, Marketing, Development, etc."
                       onChange={this.props.changeBusinessArea}
                       onFocus={this.props.focusBusinessArea}
                       onBlur={this.props.blurBusinessArea}
                       value={this.props.businessArea}
                />
                <p id="businessErrorMessage" className={styles.not_valid_business}>{this.props.businessErrorMessage}</p>
            </div>

        );
    }

}
export default BusinessArea;