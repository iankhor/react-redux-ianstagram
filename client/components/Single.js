import React, {Component} from 'react'
import { Link } from 'react-router'
import Photo from './Photo'
//import comments

export default class Single extends Component {
    render(){

        const index = this.props.posts.findIndex( (post) => post.code === this.props.params.postId )

        const post = this.props.posts[index]

        return(
            <div className="single-photo">   
                <Photo i={index} post={post} {...this.props} />
            </div>
        )
    }
}
