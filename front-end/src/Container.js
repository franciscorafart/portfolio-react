import React, {Component} from 'react'
import Presentation from './Presentation'
import client from '../client'
import Skills from './Skills'
import MyContacts from './MyContacts'
import Footer from './Footer'
import Applications from './Applications'
import OtherProjects from './OtherProjects'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

class Container extends Component {
    constructor(props){
        super(props)

        this.urlFor = this.urlFor.bind(this)
        this.titleCase = this.titleCase.bind(this)
    }

    urlFor = (source) => {
        return builder.image(source)
    }

    titleCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    render(){
        return(
            <div>
                <div className="portfolio_div">
                    <Presentation
                        urlFor={this.urlFor}
                        resources={this.props.resources}
                        header={this.props.header}
                    />
                    <Skills
                        urlFor={this.urlFor}
                        titleCase={this.titleCase}
                        skillResources={this.props.skillResources}
                        liImgData={this.props.liImgData}
                    />
                    <Applications
                        urlFor={this.urlFor}
                        appBackground={this.props.appBackground}
                        apps={this.props.apps}
                    />
                    <OtherProjects
                        urlFor={this.urlFor}
                        appBackground={this.props.appBackground}
                        otherProjects={this.props.otherProjects}
                    />
                    <MyContacts
                        urlFor={this.urlFor}
                        contacts={this.props.contacts}
                    />
                    <Footer
                        resources={this.props.resources}
                        urlFor={this.urlFor}
                        social_media={this.props.social_media}
                    />
                </div>
                <style jsx>{`
                      .portfolio_div {
                        background-color: #F2F2F2;
                      }
                      .text{
                          font-family: 'Lato', sans-serif;
                          font-size: 4em;
                      }
                    `}
                </style>
            </div>

        )
    }
}

export default Container;
