import React, {Component} from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import HoverIcon from './HoverIcon'

class Footer extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="footer-bg">
                <footer>
                    <div className="footer-content">
                        <div className="nameDiv">
                            <h1 className="text">{this.props.resources.name}</h1>
                            <h2 className="text">{this.props.resources.profession}</h2>
                        </div>
                        <div className="middleDiv">

                        </div>
                        <div className="contacts">
                            <div className="icons">
                                {
                                this.props.social_media.map(icon => {
                                    return <HoverIcon
                                        key={icon.name}
                                        noHover={this.props.urlFor(icon.image.asset._ref)}
                                        hover={this.props.urlFor(icon.image_hover.asset._ref)}
                                        link={icon.link}
                                    />
                                })
                                }
                            </div>
                        </div>
                    </div>
                </footer>
                <style jsx>{`
                    .footer-bg {
                        background-color: #4F4F4F;
                        min-height: 80px;
                    }
                    .footer-content {
                        width: 80%;
                        margin-left: 10%;
                        display: flex;
                    }
                    .text{
                        font-family: 'Lato', sans-serif;
                    }
                    .nameDiv{
                        flex: 7;
                    }
                    .contacts {
                        flex: 1;
                    }
                    .icons {
                        display: flex;
                        padding-top: 20px;
                    }
                    h1 {
                        font-size: 1.2em;
                        font-weigth: 900;
                        color: #FFFFFF;
                    }
                    h2 {
                        color: #AAAAAA;
                        font-size: 0.8em;
                    }
                    @media only screen and (max-width:650px){
                        .footer-content {
                            width: 90%;
                            margin-left: 5%;
                        }
                        .nameDiv{
                            flex: 2;
                        }
                        .contacts {
                            flex: 1;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Footer
