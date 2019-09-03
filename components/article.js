import React from 'react'
import Card from './card'
import Text from './text'

const Article = ({link, thumbnail, title, description, pubDate}) => {
    return link == undefined ? <p> Loading... </p> : (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 flex">
        <a href={link} target="__blank" className="block-link margin-1">
            <Card className="nospacing height-100">
                <div className="card__image">
                    {thumbnail && <img className="downsize" src={thumbnail} />}
                </div>
                
                <article className="padding-top-1 padding-bottom-1 padding-left-2 padding-right-2">
                    <div className="article__content">
                        <Text tag="h4" cssClass="h4 text-color-black">{title}</Text>
                        <Text tag="p" cssClass="light text-color-gray-3">{description.replace(/(<([^>]+)>)/ig, '').substring(0,200)}</Text>
                    </div>
                    
                    <div className="article__extra-information padding-top-2 flex xs-between small">
                        <time dateTime={pubDate.split(' ')[0]}>{pubDate.split(' ')[0]}</time>
                        <span>33m</span>
                    </div>
                </article>
            </Card>
        </a>
    </div>
)}

export default Article