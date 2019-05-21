import React from 'react';
import DonutChart from "react-svg-donut-chart"

export class RepostTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            val: "",
            val2: "",
        };
    }
    componentWillMount() {
        this.setState({
            val: Number(this.props.state.value),
            val2: 100 - Number(this.props.state.value),

        })

    }
    render() {

        const {
            state
        } = this.props;
        console.log(this.state.val)
        const data = [
            { value: this.state.val, stroke: "#ef98d7"},
            { value: this.state.val2, stroke: "#b7afaf" },
        ]

        return (
            <div className=" customContainer">
              
                <div className="row">
                    <h4  className="styleFont"> Hi :{this.props.state.name}</h4>
                </div>
                <p>Your Value</p>
                <DonutChart data={data} className="chart" />
                <spam className='chartVal'><b>{this.state.val} %</b></spam>
                <div className="row styleFont"> <label className=""> On Start date:</label>{this.props.state.displayStartDate}</div>
                <div className="row styleFont">  <label className="">To End date:</label>{this.props.state.displayEndDate}</div>
            </div>
        )






    }
}