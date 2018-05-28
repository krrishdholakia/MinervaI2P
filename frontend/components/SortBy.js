import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const options = [
    { value: 'PHL', text: 'Price High-to-Low' },
    { value: 'PLH', text: 'Price Low-to-High' },
    { value: 'NY', text: 'Nearest to You' },
    { value: 'TR', text: 'Top Rated'}
  ]
  
const SortBy = () => {
    return (
        // <div >
        <div style={{height:'7em'}}>
            <h3 className = "sort-by-label"> Sort By </h3>
            {/* <h3 className = "sort-by-filter"> Price High-to-Low </h3> */}
            <Dropdown
            as='h3'
            className='sort-by-filter'
            floating
            options={options} 
            placeholder={options[0].text}/>
        </div>
    )
}

export default SortBy;