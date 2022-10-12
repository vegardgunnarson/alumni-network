import { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from 'redux';

import { createEventAction, 
        getEventsAction} from '../store/actions/EventsActions' 

class Events extends Component {
    onCreateEvent(){
        this.props.createEventAction();
    }
    
    componentDidMount() {
        this.props.getEventsAction();
    }

    render() {
        const events = [];

        for (let event of this.props.posts){
            events.push(
                <div
                    key={event.id}
                    
                >
                    <div>{event.title}</div>
                    <div>{event.description}</div>
                    <div>{event.username}</div>
                </div>    
            )
        }
        return <div>
             <h2 className="bolder text-lg"> events</h2>
             <button className="bg-red-300 px-3 py-2"
                onClick={this.onCreateEvent.bind(this)}
            >
                Create event
            </button>          
            <hr />
            <div className='flex'>{events}</div>

        </div>;
        }  
    }
    


    const mapStateToProps = (state) => {
        return {
            events: state.events,
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators(
            { createEventAction, getEventsAction }, 
            dispatch,
        );
    };

export default connect(mapStateToProps, mapDispatchToProps) (Events); 