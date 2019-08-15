import React from 'react'

const Text = props => (
    React.createElement(props.tag, {className: props.cssClass}, props.children)
)

export default Text