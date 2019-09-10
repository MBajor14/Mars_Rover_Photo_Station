import React from 'react';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Form = props => {
    const getCurrentDate = () => {
        const
            currentUnix = new Date(Date.now()),
            year = currentUnix.getUTCFullYear(),
            month = currentUnix.getUTCMonth(),
            day = currentUnix.getUTCDate()
        ;
        return `${year}-${month}-${day}`;
    };

    return (
        <form className="d-flex flex-column" onSubmit={props.handleSubmit}>
            <h4>Choose a rover</h4>
            <div className="flex-fill d-flex justify-content-around">
                <button type="button" id="curiosityBtn" className=" btn flex-fill text-white rounded-0">
                    Curiosity
                </button>
                <button type="button" id="opportunityBtn" className="btn flex-fill text-white rounded-0">
                    Opportunity
                </button>
                <button type="button" id="spiritBtn" className="btn flex-fill text-white rounded-0">
                    Spirit
                </button>
            </div>
            <div className="bg-dark border rounded">
                {/* put selected rover details here */}
                <h4>{props.selectedRover.name}</h4>
                <div>
                    <h5>Launch Date</h5>
                    <span>{props.selectedRover.launch_date}</span>
                </div>
                <div>
                    <h5>Landing Date</h5>
                    <span>{props.selectedRover.landing_date}</span>
                </div>
                <div>
                    <h5>Status</h5>
                    <span>{props.selectedRover.status}</span>
                </div>
            </div>
            <div>
                <h4>Choose a Date</h4>
                <input type="date" name="date"  min="2018-04-01" max={getCurrentDate()}/>
                {/*<label htmlFor="date">Date</label>*/}
            </div>

            <button className="btn bg-white">
                {/*<FontAwesomeIcon icon={faChevronRight}/>*/}
                Blast Off!
            </button>
        </form>
    );
};

export default Form;

// Nasa's rovers on mars: Curiosity, Opportunity, Spirit
// Curiosity currently down?
