import React, {Component} from 'react';
import classes from "./Forms.module.css";

import NameOfCompany from "./InputComponents/NameOfCompany";
import CountOfPeople from "./InputComponents/CountOfPeople";
import BusinessArea from "./InputComponents/BusinessArea";
import DescriptionArea from "./InputComponents/DescriptionArea";
import FileInput from "./InputComponents/FileInput";
import SubmitComponent from "./InputComponents/SubmitComponent";

class FormInputs extends Component {
    constructor() {
        super();
        this.state = {
            companyName: "",
            countOfPeople: "",
            businessArea: "",
            descriptionArea: "",
            files: "",
            number_of_people: "",
            business_area: "",
            description_area: "",
            countErrorMessage: "",
            businessErrorMessage: "",
            descriptionErrorMessage: ""
        }
        this.changeCompanyName = this.changeCompanyName.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
    }

    changeCompanyName = (event) => {
        this.setState({companyName: event.target.value});
    }
    changeCountOfPeople = (event) => {
        this.setState({countOfPeople: event.target.value.replace(/\D/,'')});
    }
    changeBusinessArea = (event) => {
        this.setState({businessArea: event.target.value});
    }
    changeDescriptionArea = (event) => {
        this.setState({descriptionArea: event.target.value});
    }
    onChangeFile = (event) => {
        this.setState({files: event.target.files})
    }


    isEmpty = (event) => {
        let siblings = Array.prototype.slice.call(event.currentTarget.parentNode.children);
        let nameState = siblings.pop().id;
        let toClassName = event.currentTarget.id;
        if(event.target.value.length == 0) {
            this.setState({[toClassName]: "#F15557"});
            this.setState({[nameState]: "This field in required"});
        } else {
            this.setState({[nameState]: ""});
            this.setState({[toClassName]: ""});
        }
    }
    returnState = (event) => {
        let siblings = Array.prototype.slice.call(event.currentTarget.parentNode.children);
        let nameState = siblings.pop().id;
        let toClassName = event.currentTarget.id;
        this.setState({[toClassName]: ""});
        this.setState({[nameState]: ""});
    }
    numberValidation = (event)=> {
        let siblings = Array.prototype.slice.call(event.currentTarget.parentNode.children);
        let nameState = siblings.pop().id;
        let toClassName = event.currentTarget.id;
        if(event.target.value.length == 0) {
            this.setState({[toClassName]: "#F15557"});
            this.setState({[nameState]: "This field in required"});
        } else if(event.target.value.charAt(0) == 0 || event.target.value == 0 || event.target.value.length > 2) {
            this.setState({[toClassName]: "#F15557"});
            this.setState({[nameState]: "Please enter number from 1 to 99"});
        } else {
            this.setState({[nameState]: ""});
            this.setState({[toClassName]: ""});
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.countOfPeople.length == 0 && this.state.businessArea.length == 0 && this.state.descriptionArea.length == 0){
            this.setState({number_of_people: "#F15557"});
            this.setState({business_area: "#F15557"});
            this.setState({description_area: "#F15557"});
        } else if(this.state.countOfPeople.length == 0 && this.state.businessArea.length == 0 ){
            this.setState({number_of_people: "#F15557"});
            this.setState({business_area: "#F15557"});
        } else if(this.state.countOfPeople.length == 0 && this.state.descriptionArea.length == 0){
            this.setState({number_of_people: "#F15557"});
            this.setState({description_area: "#F15557"});
        } else if(this.state.businessArea.length == 0 && this.state.descriptionArea.length == 0){
            this.setState({business_area: "#F15557"});
            this.setState({description_area: "#F15557"});
        } else  if(this.state.countOfPeople.length == 0){
            this.setState({number_of_people: "#F15557"});
        } else if(this.state.businessArea.length == 0){
            this.setState({business_area: "#F15557"});
        } else if(this.state.descriptionArea.length == 0){
            this.setState({description_area: "#F15557"});
        } else {
            console.log(this.state.companyName, this.state.countOfPeople, this.state.businessArea, this.state.descriptionArea);


            for(let i = 0; i < this.state.files.length; i++ ){
                console.log(this.state.files[i].name);
            }

            this.setState({companyName: ""});
            this.setState({countOfPeople: ""});
            this.setState({businessArea: ""});
            this.setState({descriptionArea: ""});
            this.setState({files: ""});
        }
    }


    render() {
        return (
            <div className={classes.form_area}>
                <form onSubmit={this.handleSubmit}>
                    <div className={classes.top_inputs}>
                        <NameOfCompany companyName={this.state.companyName}
                                       changeCompanyName={this.changeCompanyName}
                        />

                        <CountOfPeople countOfPeople={this.state.countOfPeople}
                                       numberError={this.state.number_of_people}
                                       countErrorMessage={this.state.countErrorMessage}
                                       changeCountOfPeople={this.changeCountOfPeople}
                                       focusCountOfPeople={this.returnState}
                                       blurCountOfPeople={this.numberValidation}
                        />
                    </div>
                    <BusinessArea businessArea={this.state.businessArea}
                                  businessError={this.state.business_area}
                                  businessErrorMessage={this.state.businessErrorMessage}
                                  changeBusinessArea={this.changeBusinessArea}
                                  focusBusinessArea={this.returnState}
                                  blurBusinessArea={this.isEmpty}
                    />

                    <DescriptionArea descriptionArea={this.state.descriptionArea}
                                     descriptionError={this.state.description_area}
                                     descriptionErrorMessage={this.state.descriptionErrorMessage}
                                     changeDescriptionArea={this.changeDescriptionArea}
                                     focusDescriptionArea={this.returnState}
                                     blurDescriptionArea={this.isEmpty}
                    />
                    <FileInput onChangeFile={this.onChangeFile}
                               countOfFiles={this.state.files.length}
                    />
                    <SubmitComponent />
                </form>
            </div>
        );
    }

}

export default FormInputs;