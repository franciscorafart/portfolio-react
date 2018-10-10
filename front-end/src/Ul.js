import React, {Component} from 'react'
import client from '../client'

class Ul extends Component {
    constructor(props){
        super(props)
        let column = this.props.column
    }

    render(){

        return(
            <div className="uldiv">
                    <h3 className="text">{this.props.title}</h3>
                    <ul>
                        {
                            this.props.elements.map(e =>{
                                return <li key={e.toLowerCase()}><img src={this.props.liImg}/> <span>{e}</span></li>
                            })
                        }
                    </ul>

                <style jsx>{`
                        .uldiv {
                            width: 33.3333%;
                        }
                        .text {
                            font-family: 'Lato', sans-serif;
                        }
                        h3 {
                          font-size: 1.4em;
                          margin-left: 25%;
                        }
                        li {
                            list-style: none;
                            margin-top: 15px;
                            align-content: center;
                        }
                        span {
                            width: 70%;
                            margin-left: 15%;
                            font-size: 1.4em;
                            text-align: center;
                        }
                        @media only screen and (max-width:800px){
                            ul {
                                padding-left: 10%;
                            }
                            h3 {
                              font-size: 1.2em;
                              margin-left: 15%;
                            }
                            span {
                                width: 90%;
                                margin-left: 5%;
                                font-size: 1em;
                            }
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default Ul;
