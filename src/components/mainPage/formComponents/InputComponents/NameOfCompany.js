import React, {Component} from 'react';
import styles from "./CompanyName.module.css"
class NameOfCompany extends Component {


    render() {
        return(
            <div className={styles.name_container}>
                <label htmlFor="company_name">Your company name</label>
                <input id="company_name" className={styles.form_input} type="text" placeholder="Type text"
                       onChange={this.props.changeCompanyName}
                       value={this.props.companyName}
                />
            </div>

        );
    }

}
export default NameOfCompany;