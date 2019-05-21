import React from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { RepostTab } from './ReportTab';
export class MainTab extends React.Component {

    constructor() {
        super();
        this.state = {
            isredirect: false,
            name: "",
            value: "",
            startDate: "",
            endDate: "",
            displayStartDate:"",
            displayEndDate:""

        };
    }

    setRedirect = () => {
        if ( this.state.name && this.state.value && this.state.startDate && this.state.endDate){
        this.setState({
            isredirect: true

        })
        }else {
            alert( "Please fill all details")
        }
    }

    handleName = (e) => {
        console.log("target.value", e.target.value)
        this.setState({ name: e.target.value })
    }



    handleValue = (e) => {
        let value = e.target.value;
        console.log("target.value", e.target.value)
        if (value <= 100 && value >= 0) {


            this.setState({ value: e.target.value })
        }
        else {
            alert("please enter value between 0 to 100")
        }
    }
    handleStartDate = (date) => {
        console.log(date)

        var dd = date.getDate();

        var mm = date.getMonth()+1; 
            var yyyy = date.getFullYear();
           let today = mm+'-'+dd+'-'+yyyy;
        this.setState({ startDate: date ,
            displayStartDate:today })

    }
    handleEndDate = (date) => {
        console.log(date.getDate())
        if (this.state.startDate < date) {
            var dd = date.getDate();

            var mm = date.getMonth()+1; 
            var yyyy = date.getFullYear();
           let today = mm+'-'+dd+'-'+yyyy;
            this.setState({ endDate: date,displayEndDate:today })
        }
        else {
            alert("End date will not be shorter then start date")
        }

    }

    backMainTab = () => {
        this.setState({
            isredirect: false,
            name: '',
            value: '',
            startDate: '',
            endDate: '',
            displayStartDate:"",
            displayEndDate:""
        })

    }

    render() {
        return (
            <div className="fluid-container">
                {!this.state.isredirect &&
                    (<div >
                        <div className="mainTabHeader styleFont">
                            Enter User details
                                    </div>
                        <div className="container">

                        <div>
                            <div className="row marginTop">
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-md-12">
                                    <label className="marginTop">Name:</label></div>
                                    <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12">   <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter you Name"
                                        value={this.state.name}

                                        onChange={(e) => { this.handleName(e) }}
                                    />
                                    </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4 col-md-12">
                                    <label className="marginTop">Enter the Value between 0 to 100:</label> </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12">  <input
                                        id="typeinp"
                                        type="number"
                                        className="form-control marginTop"
                                        placeholder="Enter the Value "
                                        value={this.state.value}
                                        min="0" max="100"
                                        step="1"
                                        pattern="[0-9]*"

                                        onChange={(e) => { this.handleValue(e) }}

                                    />
                                   

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <label className="marginTop">Enter Start date</label></div>
                                    <div className="col-6">
                                        <DatePicker
                                            className="form-control marginTop"
                                            selected={this.state.startDate}
                                            onChange={date => { this.handleStartDate(date) }}
                                        />

                                    </div></div>
                            <div className="row">
                                <div className="col-4">
                                    <label className="marginTop">Enter End date</label></div>
                                    <div className="col-6">
                                        <DatePicker
                                            className="form-control marginTop"
                                            selected={this.state.endDate}
                                            onChange={date => { this.handleEndDate(date) }}
                                        />

                                    </div></div>
                            <div className="">
                                <input type="submit"
                                    className="btn btn-success marginTop "
                                    value="REPORT TAB"
                                    onClick={this.setRedirect}
                                />

                            </div> </div>  </div>

                    </div>)
                }{
                    this.state.isredirect &&
                    (<div className="reportHeader"> <RepostTab
                        // name={this.name}
                        // value={this.state.value}
                        // startDate={this.state.startDate}
                        // endDate={this.state.endDate}
                        state={this.state}
                    // back= {this.backMainTab}
                    />
                        <div className="row">
                            <input type="submit"
                                className="btn btn-info" value="BACK"
                                onClick={this.backMainTab}
                            />

                        </div>
                    </div>)
                }
            </div>
        )






    }
}
