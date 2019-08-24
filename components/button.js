import React from 'react'

const Button = props => (
    <a {...props}>
        {props.children}
        
        <style jsx>{`
            .button {
                border-radius: 2rem;
                padding: 1rem 2rem;
            }

                .button--primary {
                    background-image: linear-gradient(-90deg, var(--blue-3), var(--blue-3));
                    color: var(--white, white);
                }

                .button--primary:hover {
                    background-image: linear-gradient(-90deg, var(--blue-3), var(--blue-2));
                }
        `}</style>
    </a>
)

export default Button
