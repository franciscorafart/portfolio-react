import React, {Component} from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'


class Presentation extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
                <div>
                    <section>
                            <div className="header-bg" style = {{backgroundImage: `url(${this.props.urlFor(this.props.header.poster.asset._ref)})`}}>
                                <div className="header-content clearfix">
                                    <div className="bio-container">
                                        <h1 className="text">{this.props.resources.name}</h1>
                                        <title><h2 className="text">{this.props.resources.profession}</h2></title>
                                        <p className="text">
                                            {
                                                this.props.resources.bio? this.props.resources.bio
                                                    .map(child => child.children
                                                        .filter(child => child._type === 'span')
                                                        .map(
                                                            child2 => child2.text
                                                            )
                                                        ).join(' ')
                                                    : 'No description'
                                            }
                                        </p>
                                    </div>
                                    <div className="frank-container">
                                        <img className="frank-pic" src={this.props.urlFor(this.props.resources.image.asset._ref)}/>
                                    </div>
                                </div>
                            </div>
                    </section>
                        <style jsx>{`
                            .clearfix:after {
                                 content: ".";
                                 display: block;
                                 clear: both;
                                 visibility: hidden;
                                 line-height: 0;
                                 height: 0;
                            }
                            .header-content {
                               width: 80%;
                               margin-left: 10%;
                            }
                            .header-bg {
                                min-height:420px;
                                background-color: #F2F2F2;
                                background-size: cover;
                                padding: 60px 0 0 0;
                            }
                            .bio-container{
                                width: 40%;
                                margin: 0 0 80px 5%;
                                display: block;
                                float: left;
                            }
                            .frank-container {
                                width: 55%;
                                display: block;
                                float: left;
                            }
                            .frank-pic {
                                width: 80%;
                                margin-left: 10%;
                                align-content: center;
                            }
                            .text{
                                font-family: 'Lato', sans-serif;
                            }
                              h1 {
                                font-size: 2.6em;
                                letter-spacing: 1px;
                                font-weight: 900;
                                line-height: 45px;
                              	color: #FFFFFF;
                              }
                              h2 {
                                 font-size: 1.6em;
                                 font-weight: 600;
                                 color: #AAAAAA;
                              }
                              p {
                                font-size: 0.8em;
                                color: #FFFFFF;
                                font-weight: 200;
                                line-height: 26px;
                                text-align: justify;
                              }
                              @media only screen and (max-width:940px){

                                  .header-bg {
                                      background-color: #F2F2F2;
                                      padding: 30px 0 0 0;
                                  }
                                  .bio-container{
                                      width: 80%;
                                      margin: 0 0 40px 10%;
                                      float: none;
                                  }
                                  .frank-container {
                                      width: 80%;
                                      margin-left: 10%;
                                      float: none;
                                  }
                              }
                              @media only screen and (max-width:650px){
                                  .header-content {
                                     width: 90%;
                                     margin-left: 5%;
                                  }
                                  .bio-container{
                                      width: 90%;
                                      margin: 0 0 40px 5%;;
                                  }
                                  .frank-container {
                                      width: 100%;
                                      margin-left: 0;
                                      float: none;
                                  }
                              }
                            `}
                        </style>
                </div>
        )
    }
}

export default Presentation
