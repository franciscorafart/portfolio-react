import React, {Component} from 'react'
import client from '../client'

class MyContacts extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <section>
                    <div className="contacts-container">
                        <div className="h3Container">
                            <h3 className="text"><span className="h3Span">Contact</span></h3>
                        </div>
                        <div className="contactsContent">
                        {
                            this.props.contacts.map(contact => {
                                return(
                                    <div key={contact._id} className="contact">
                                        <div className="aDiv">
                                            <a href={contact.link}>
                                                <img src={this.props.urlFor(contact.image.asset._ref)}/>
                                            </a>
                                        </div>
                                        <div className="spanDiv">
                                            <span className="text">{contact.link_short}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    .contacts-container {
                        width: 80%;
                        margin-left: 10%;
                    }
                    .contactsContent {
                        display: flex;
                        padding: 80px 0 80px 0;
                    }
                    .h3Span {
                        border-left: 2px solid #F11A69;
                        padding-left: 10px;
                    }
                    h3 {
                      font-size: 3em;
                      color: #3E3E3E;
                      font-weight: 900;
                      text-align: center;
                    }
                    .contact {
                        flex: 1;
                        display: flex;
                    }
                    .text{
                        font-family: 'Lato', sans-serif;
                    }

                    .aDiv {
                        flex: 1;
                        padding: 0 5px 0 5px;
                    }
                    .spanDiv {
                        padding-top: 5px;
                        flex: 6;
                    }
                    @media only screen and (max-width:900px){
                        .contacts-container {
                            width: 90%;
                            margin-left: 5%;
                        }
                        .contactsContent {
                            flex-direction: column;
                            width: 60%;
                            margin-left: 20%;
                        }
                        .contact {
                            margin-bottom: 30px;
                        }
                        .aDiv {
                            flex: 2;
                            padding: 0 5px 0 5px;
                        }
                        .spanDiv {
                            padding-top: 5px;
                            flex: 6;
                        }
                    }
                    @media only screen and (max-width:600px){
                        .contactsContent {
                            margin-left: 15%;
                        }
                        .aDiv {
                            flex: 2;
                            padding: 0 20px 0 0;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default MyContacts
