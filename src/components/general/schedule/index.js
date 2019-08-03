import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {getSchedule} from '../../../actions/index';
import upDots from '../../../assets/images/up-dots.png';

class AddScheduleForm extends Component {
    
    componentDidMount(){
        this.props.getSchedule();
    }

    render(){
        
        const  { isFetching , list} = this.props;   
        const rowElements = list.map(schedule => {
             return (              
             <tr style={{backgroundColor:"grey"}}colSpan="5" >
                <td>{schedule.day}</td>
                <td>{schedule.open}-{schedule.close}</td>                
             </tr> )
        });

        return (<div>
                <section style={{top:"20px",position:"relative",left:"60px",fontFamily:"arial",width:"500px",color:"#754b23" }}> 
                    <h2>Contact us today!</h2>
                    <p >Talk cupcakes to us! At Sweet Corner's we love hearing from our
                       customers. Send your questions, comments and flavor suggestions to:</p>
                    <p>office@sweetcorner.com</p>
                    <p >Our expert bakers are waiting to create an unique cupcake
                       bursting with freshness and flavor just for you. Our management
                       team are also waiting for their next event to organize.</p>
                </section>
                <div style={{position:"relative",left:"400px"}}>
                    <img src={upDots} />
                </div>
                <div style={{position:"relative",left:"60px",height:"300px",color:"#754b23"}}>
                  <h4 style={{position:"relative",top:"100px",fontFamily:"arial"}}>For phone orders, our work schedule is: </h4>
                  <table style={{position:"relative",top:"100px"}}className="table table-hover mx-2">
                    <thead>
                    </thead> 
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
                </div>
            </div>    
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
