import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {getSchedule} from '../../../actions/index';

class AddScheduleForm extends Component {
    
    componentDidMount(){
        this.props.getSchedule();
    }

    render(){
        
        const  { isFetching , list} = this.props;   
        console.log("list", list);
        const rowElements = list.map(schedule => {
             return (              
             <tr colSpan="5" >
                <td>{schedule.day}</td>
                <td>{schedule.open}</td>
                <td>{schedule.close}</td>
             </tr> )
        });

        return (
            <table className="table table-hover mx-2">
                            <thead></thead> 
                <tbody>
                    {
                        isFetching  ? 
                       ( <tr>
                            <td colSpan="5">Loading...</td>
                        </tr>):
                        rowElements
                    }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        isFetching:state.schedule.isFetching,
        list:state.schedule.list
    }
}

export default connect(mapStateToProps, {getSchedule})(AddScheduleForm);
