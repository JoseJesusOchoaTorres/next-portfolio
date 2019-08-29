import React from 'react'
import Card from './card'
import Text from './text'

const Article = ({link, thumbnail, title, description, pubDate}) => {
    return link == undefined ? <p> Loading... </p> : (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <a href={link} target="__blank" className="block-link margin-1">
            <Card className="nospacing">
                <article>
                    {thumbnail && <img className="downsize" src={thumbnail} />}
                    <Text tag="h4" cssClass="h4 text-color-black">{title}</Text>
                    <Text tag="p" cssClass="light text-color-gray-3">{description.replace(/(<([^>]+)>)/ig, '').substring(0,200)}</Text>
                    <div className="padding-top-2 flex xs-between small">
                        <time dateTime={pubDate.split(' ')[0]}>{pubDate.split(' ')[0]}</time>
                        <span>33m</span>
                    </div>
                </article>
            </Card>
        </a>
    </div>
)}

export default Article