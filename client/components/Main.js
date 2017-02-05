import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Main extends Component {
    render(){
        return(
            <div className="main">   
                <h1>
                    <Link to="/">Reduxstagram</Link>
                    {this.props.children}
                </h1>
            </div>
        )
    }
}
