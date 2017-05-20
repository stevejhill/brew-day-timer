import React from 'react';
import { FormControl } from 'react-bootstrap'

export default class TimePicker extends React.Component {
  
	render = () => {
        let hours = [];
        let minutes = [];
        let seconds = [];
        for(let i = 0; i < 100; i++)
        {
            hours.push(i);
            if(i < 60)
            {
                minutes.push(i);
                seconds.push(i);
            }
        }
        let hoursOptions = hours.map(hour => (
            <option key={hour}>
                {hour}
            </option>
        ));
        return <FormControl componentClass="select" bsClass="col-xs-1">
                  {hoursOptions}
               </FormControl>;
  };
}