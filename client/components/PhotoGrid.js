import React, {Component} from 'react'
import { Link } from 'react-router'

export default class PhotoGrid extends Component {
    render(){
        return(
            <div className="photo-grid">   
                <Link to="/">This is the photo grid</Link>
            </div>
        )
    }
}
