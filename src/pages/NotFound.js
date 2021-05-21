import React from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <p>Not Found</p>
                <img
                    className="not-found-image"
                    src="https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"
                    alt="Pikachu crying because the page requested was not found"
                />
            </div>
        )
    }
}

export default NotFound;