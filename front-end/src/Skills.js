import React, {Component} from 'react'
import client from '../client'
import Ul from './Ul'

class Skills extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let uls = []
        let liImg = this.props.urlFor(this.props.liImgData.poster.asset._ref)

        for (let key in this.props.skillResources){
            uls.push(
                <Ul
                    key={key}
                    title={this.props.titleCase(key)}
                    elements={this.props.skillResources[key]}
                    liImg={liImg}
                >
                </Ul>
            )
        }

        return(
            <div className="skills-container">
                <section>
                    <div className="skillSection">
                        <div className="h3Container">
                            <h3 className="text"><span>My Skills</span></h3>
                        </div>
                        <div className="ulContainer">
                        {
                            uls.map(ul => {return ul})
                        }
                        </div>
                    </div>
                    <style jsx>{`
                            .skills-container {
                                width: 80%;
                                margin-left: 10%;
                            }
                            .skillSection {
                                padding: 80px 0 80px 0;
                            }
                            .h3Container {
                                padding-bottom: 40px;
                            }
                            .text{
                                font-family: 'Lato', sans-serif;
                            }
                            h3 {
                              font-size: 3em;
                              color: #3E3E3E;
                              text-align: center;
                            }
                            span {
                                border-left: 2px solid #F11A69;
                                padding-left: 10px;
                            }
                            .ulContainer{
                                display: flexbox;
                                flex-direction: column;
                                align-content: center;
                            }
                            @media only screen and (max-width:650px){
                                .skills-container {
                                    width: 100%;
                                    margin-left: 0;
                                }

                            }
                        `}
                    </style>
                </section>
            </div>
        )
    }
}

export default Skills
