import React from 'react'

const Title = props => (
    <h2 className="title">
        {props.children}
    
        <style jsx>{`
            .title {
                color: var(--black, black);
                font-weight: bold;
                font-size: 1.3rem;
            }
        `}</style>
    </h2>
)

export default Title