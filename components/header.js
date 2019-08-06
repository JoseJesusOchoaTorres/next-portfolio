import React from 'react'

const Header = () => (
  <header>
    <div className="container">
        <div className="row">
            <div className="col-xs-1 red">Col-xs-1</div>
            <div className="col-xs-11  green">Col-xs-11</div>
        </div>
    </div>

    <style jsx>{`
        .red {
            background: red;
        }
        .green {
            background: green;
        }
    `}</style>
  </header>
)

export default Header
