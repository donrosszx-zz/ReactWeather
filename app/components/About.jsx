var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is my first React.js project using Foundation</p>
            <ul>
                <li><a href="http://foundation.zurb.com/docs">Foundation Docs</a></li>
                <li><a href="https://github.com/donrosszx/ReactWeather">My github repo</a></li>
                <li><a href="http://openweathermap.org/current">Open Weather Map API</a></li>
            </ul>
        </div>
    )
};

module.exports = About;