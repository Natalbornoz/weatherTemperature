import React from 'react';
import Proptypes from 'prop-types';

const Location = ({ city }) => (//{
    //  const city = props.city;
    //console.log(props);
    // const {city} = props;
    // return (
     <div>
         <h1>
             {city}
         </h1>
     </div>
);
//);
//};

Location.Proptypes = {
    city: Proptypes.string.isRequire,
}
export default Location;