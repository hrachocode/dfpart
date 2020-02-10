import React from 'react';
const Header = (props) => {
    return (
        <div className="content-top-text">
            <h1>{props.title}</h1>
            <p className="size-lg">{props.description}</p>
        </div>
    )
}
export default Header