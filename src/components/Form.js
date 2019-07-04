import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Form = props => (
    <div className="form-component">
        <form onSubmit={props.handleSubmit}>
            <fieldset>
                <legend>Choose a rover</legend>
                <div className="form-body">
                    <div className="form-inputs">
                        <div>
                            <input type="radio" value="curiosity" id="curiosity" name="rover"/>
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
                        <div>
                            <input type="date" value="date" name="date"/>
                            {/*<label htmlFor="date">Date</label>*/}
                        </div>
                    </div>
                    <div>
                        <button>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
);

export default Form;

// Nasa's rovers on mars: Curiosity, Opportunity, Spirit
// Curiosity currently down?