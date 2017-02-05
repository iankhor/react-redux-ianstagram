import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Single extends Component {
    render(){
        return(
            <div className="single-photo">   
                <Link to="/">This is a single photo</Link>
            </div>
        )
    }
}
