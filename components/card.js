import React from 'react'

const Card = props => (
    <div className="card">
        {props.children}
        
        <style jsx>{`
            .card {
                box-shadow: 0 4px 11px rgba(0, 0, 0, 0.15);
                background-color: var(--white, white);
                border-radius: 0.3rem;
                padding: 1.5rem;
                margin: 1rem;
            }
        `}</style>
    </div>
)

export default Card
