import React, {Component} from 'react'
import { Link } from 'react-router'

export default class PhotoGrid extends Component {
    render(){
        return(
            <div className="photo-grid">   
                <h1>
                    <Link to="/">This is the photo grid</Link>
                </h1>
            </div>
        )
    }
}

export default PhotoGrid