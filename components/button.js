import React from 'react'

const Button = props => (
    <a {...props}>
        {props.children}
    </a>
)

export default Button
