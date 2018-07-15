import React from 'react';
import PropTypes from 'prop-types'; 
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {Button, Dropdown, Icon, Input} from 'semantic-ui-react'; 
import { DateRangePicker } from 'react-dates';

const options = [
    { value: 'Law', text: 'Law' },
    { value: 'Beauty & Wellness', text: 'Beauty & Wellness' },
    { value: 'Healthcare', text: 'Healthcare' },
    { value: 'Technology', text: 'Technology'}
  ]

class BillboardBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: null,
          endDate: null,
          focusedInput: null,
        };
    }

    render() {
        return (
            <div className="billboard-booking-container">
                <div className="billboard-booking">
                    <h3 style={{margin: '0', fontSize: '30px'}}> ${this.props.price} per day </h3>
                    <h3 style={{margin: 0}}> Dates </h3> 
                        <DateRangePicker
                        className="billboard-date-picker"
                        startDateId="startDate"
                        endDateId="endDate"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
                        />
                    <h3 style={{margin: 0}}> Category </h3> 
                        <Dropdown
                        as='h3'
                        className='billboard-booking-categories'
                        floating
                        options={options} 
                        placeholder={options[0].text}
                        iconPosition='right'/>
                    <Button className="submit-bid-button"> Submit Bid </Button>
                </div>
            </div>
        );
    }
}

export default BillboardBooking;