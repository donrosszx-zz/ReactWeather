var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var temp = this.props.temp;
//         var location = this.props.location;
//         return (
//             <h3>Its {temp} in {location}</h3>
//         );
//     }
// });

// var WeatherMessage = (props) => {
//     var {temp, location} = props;
//     return (
//         <h3>Its {temp} in {location}</h3>
//     );
// };

var WeatherMessage = ({temp, location}) => {
    return (
        <h3>Its {temp} in {location}</h3>
    );
};

module.exports = WeatherMessage;