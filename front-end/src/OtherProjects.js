import React, {Component} from 'react'
import client from '../client'

class OtherProjects extends Component{
    constructor(props){
        super(props)

        this.otheProjects = []
    }

    componentWillMount(){
        this.otherProjects = this.props.otherProjects
    }

    render(){
        return(
            <div className="app-container">
                <section className="otherSection">
                    <div className="h3Container">
                        <h3 className="text"><span>Other Tech Projects</span></h3>
                    </div>
                    <div className="allApps">
                    {
                        this.otherProjects.map(project => {
                            return <div
                                    key={project.title}
                                    className="app clearfix"
                                    style={{backgroundImage: `url(${this.props.urlFor(this.props.appBackground.poster.asset._ref)})`}}
                                    >
                                        <h4 className="text">{project.title}</h4>
                                        <div className="imgContainer">
                                            <img src={this.props.urlFor(project.mainImage.asset._ref)}/>
                                        </div>
                                        <p className="text">{
                                            project.body.map(child => child.children
                                                .filter(child => child._type === 'span')
                                                .map(
                                                    child2 => child2.text
                                                    )
                                                ).join(' ')
                                        }</p>
                                    </div>
                        })
                    }
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
                    .app-container {
                        width: 80%;
                        margin-left: 10%;
                    }
                    .otherSection {
                        padding: 80px 0 80px 0;
                    }
                    .text{
                        font-family: 'Lato', sans-serif;
                    }
                    .h3Container {
                        padding-bottom: 60px;
                    }
                    h3 {
                      font-size: 3em;
                      color: #3E3E3E;
                      text-align: center;
                    }
                    h4{
                        text-align: center;
                        height 30px;
                    }
                    span {
                        border-left: 2px solid #F11A69;
                        padding-left: 10px;
                    }
                    .allApps {
                        display: flex;
                        flex-direction: row;
                    }

                    .app {
                        width: 100%;
                        margin: 10px;
                        background-size: cover;
                        background-repeat:no-repeat;
                    }
                    .imgContainer {
                        width: 100%;
                    }
                    img, p {
                        width: 90%;
                        margin-left: 5%;
                    }
                    @media only screen and (max-width:900px){
                        .app {
                            width: 100%;
                            background-size: cover;
                            margin: 0 0 40px 0;
                        }
                        .allApps{
                            flex-wrap:wrap;
                        }
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default OtherProjects
