import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Form = props => {
    const getCurrentDate = () => {
        const currentUnix = new Date(Date.now());
        const year = currentUnix.getUTCFullYear();
        const month = currentUnix.getUTCMonth();
        const day = currentUnix.getUTCDate();

        return `${year}-${month}-${day}`;
    };

    return (
        <form className="d-flex flex-column" onSubmit={props.handleSubmit}>
            <div className="d-flex justify-content-around">
                <div>
                    <h4>Choose a rover</h4>
                    <div className="flex-fill d-flex justify-content-around">
                        <div>
                            <input type="radio" value="curiosity" id="curiosity" name="rover" checked/>
                            <label htmlFor="curiosity">Curiosity</label>
                        </div>
                        <div>
                            <input type="radio" value="opportunity" id="opportunity" name="rover"/>
                            <label htmlFor="opportunity">Opportunity</label>
                        </div>
                        <div>
                            <input type="radio" value="spirit" id="spirit" name="rover"/>
                            <label htmlFor="spirit">Spirit</label>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Choose a Date</h4>
                    <input type="date" name="date"  min="2018-04-01" max={getCurrentDate()}/>
                    {/*<label htmlFor="date">Date</label>*/}
                </div>
            </div>

            <button className="btn text-white">
                {/*<FontAwesomeIcon icon={faChevronRight}/>*/}
                Blast Off!
            </button>
        </form>
    );
};

export default Form;

// Nasa's rovers on mars: Curiosity, Opportunity, Spirit
// Curiosity currently down?
