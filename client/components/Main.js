import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Main extends Component {
    render(){
        return(
            <div>   
                <h1>
                    <Link to="/">Ian-stagram</Link>
                </h1>

            {/* getting props from parents components ie: react router etc */}
            {React.cloneElement(this.props.children, this.props)}

            </div>
        )
    }
}
