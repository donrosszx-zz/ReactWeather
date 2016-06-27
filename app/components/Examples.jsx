var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li><Link to="/?location=Nashville">Nashville, TN</Link></li>
                <li><Link to="/?location=Phoenix">Phoenix, AZ</Link></li>
            </ol>
        </div>
    )
};

module.exports = Examples;