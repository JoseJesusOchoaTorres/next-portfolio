import React from 'react'
import Text from './text'
import Card from './card'

const Articles = () => (
    <section className="container padding-top-r2 padding-bottom-r2">
        <div className="row">
            <div className="col-xs-12">
                <Text tag="h3" cssClass="h1 text-color-black nospacing padding-left-2 padding-right-2">What's New</Text>
                <Text tag="h4" cssClass="h4 text-uppercase light padding-left-2 padding-right-2">Latest Published Courses & Lessons</Text>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Card className="card--link">
                    <a href="#" target="__blank">
                        <article>
                            <img className="downsize" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/308/square_480/EGH_GatsbyContentful_Final.png" />
                            <Text tag="h4" cssClass="h4 text-color-black">Build Content Rich Progressive Web Apps with Gatsby and Contentful</Text>
                            <Text tag="p" cssClass="light text-color-gray-3">The JAMstack, short for “JavaScript, APIs, and Markup,” has been making waves in the world of web development.</Text>
                            <div className="padding-top-2 flex xs-between small">
                                <time datetime="2018-08">August 23, 2019</time>
                                <span>33m</span>
                            </div>
                        </article>
                    </a>
                </Card>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Card className="card--link">
                    <a href="#" target="__blank">
                        <article>
                            <img className="downsize" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/308/square_480/EGH_GatsbyContentful_Final.png" />
                            <Text tag="h4" cssClass="h4 text-color-black">Build Content Rich Progressive Web Apps with Gatsby and Contentful</Text>
                            <Text tag="p" cssClass="light text-color-gray-3">The JAMstack, short for “JavaScript, APIs, and Markup,” has been making waves in the world of web development.</Text>
                            <div className="padding-top-2 flex xs-between small">
                                <time datetime="2018-08">August 23, 2019</time>
                                <span>33m</span>
                            </div>
                        </article>
                    </a>
                </Card>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Card className="card--link">
                    <a href="#" target="__blank">
                        <article>
                            <img className="downsize" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/308/square_480/EGH_GatsbyContentful_Final.png" />
                            <Text tag="h4" cssClass="h4 text-color-black">Build Content Rich Progressive Web Apps with Gatsby and Contentful</Text>
                            <Text tag="p" cssClass="light text-color-gray-3">The JAMstack, short for “JavaScript, APIs, and Markup,” has been making waves in the world of web development.</Text>
                            <div className="padding-top-2 flex xs-between small">
                                <time datetime="2018-08">August 23, 2019</time>
                                <span>33m</span>
                            </div>
                        </article>
                    </a>
                </Card>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Card className="card--link">
                    <a href="#" target="__blank">
                        <article>
                            <img className="downsize" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/308/square_480/EGH_GatsbyContentful_Final.png" />
                            <Text tag="h4" cssClass="h4 text-color-black">Build Content Rich Progressive Web Apps with Gatsby and Contentful</Text>
                            <Text tag="p" cssClass="light text-color-gray-3">The JAMstack, short for “JavaScript, APIs, and Markup,” has been making waves in the world of web development.</Text>
                            <div className="padding-top-2 flex xs-between small">
                                <time datetime="2018-08">August 23, 2019</time>
                                <span>33m</span>
                            </div>
                        </article>
                    </a>
                </Card>
            </div>
        </div>
    </section>
)

export default Articles