import React from 'react'
import Text from '../components/text'
import Card from '../components/card'
import Button from '../components/button'
import Article from '../components/article'

const Articles = props => (
    <section className="container padding-top-r2 padding-bottom-r2">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <Text tag="h3" cssClass="h1 text-color-black nospacing padding-left-2 padding-right-2">What's New</Text>
                <Text tag="h4" cssClass="h4 text-uppercase light padding-left-2 padding-right-2">Latest Published Courses & Lessons</Text>
            </div>

            <div className="col-xs-12 col-sm-6 flex xs-middle xs-left sm-right">
                <Button href="#" className="button button--primary margin-2" target="__blank">See all the articles →</Button>
            </div>
        </div>

        <div className="row">
            
         {props.data.items.map((article) =>
            <Article link={article.link} thumbnail={article.thumbnail}  title={article.title} description={article.description} pubDate={article.pubDate}></Article>
        )}

        </div>
    </section>
);

export default Articles