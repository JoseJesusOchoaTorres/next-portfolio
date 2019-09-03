import React from 'react'

const Card = props => (
    <div className={`card ${props.className}`}>
        {props.children}

        <style jsx>{`
            .card {
                box-shadow: 0 4px 11px rgba(0, 0, 0, 0.10);
                background-color: var(--white, white);
                border-radius: 0.3rem;
                transition: all 0.3s;
                margin: 1rem;
            }
            
            .card:hover {
                box-shadow: 0 6px 13px rgba(0, 0, 0, 0.15);
            }
        `}</style>
    </div>
)

export default Card
