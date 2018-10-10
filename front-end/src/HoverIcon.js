import React, {Component} from 'react'
import imageUrlBuilder from '@sanity/image-url'

class HoverIcon extends Component {
    constructor(props){
        super(props)

        this.mouseEnter = this.mouseEnter.bind(this.mouseEnter)
        this.mouseLeave = this.mouseLeave.bind(this.mouseLeave)

        this.state = {
            hover: false
        }
    }

    mouseEnter = () => {
        this.setState({hover: true})
    }

    mouseLeave = () => {
        this.setState({hover: false})
    }



    render(){
        return(
            <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                {
                    (this.state.hover)?
                    <div>
                        <a href={this.props.link}><img src={this.props.hover}/></a>
                    </div>
                    :
                    <div>
                        <a href={this.props.link}><img src={this.props.noHover}/></a>
                    </div>
                }
                <style jsx>{`
                    img {
                        height: 40px;
                        width: 40px;
                    }
                `}
                </style>
            </div>
        )
    }
}
export default HoverIcon
