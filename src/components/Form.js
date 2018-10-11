import React from 'react';

const Form = props => (
    <div className="form-component">
        <form onSubmit={props.handleSubmit}>
            <fieldset>
                <legend>Choose a rover</legend>
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
                    <label htmlFor="date">Date</label>
                </div> 
                <div>
                    <button>Get Pictures</button>
                </div>
            </fieldset>
        </form>
    </div>
);

export default Form;

// Nasa's rovers on mars: Curiosity, Opportunity, Spirit
// Curiosity currently down?