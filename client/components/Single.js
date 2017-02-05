import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Single extends Component {
    render(){
        return(
            <div className="single-photo">   
                <h1>
                    <Link to="/">This is a single photo</Link>
                </h1>
            </div>
        )
    }
}

export default Single className="single-photo"