import React , {Component} from 'react'

export default class Comments extends Component {
    constructor(props){
        super(props)

        this.renderComment = this.renderComment.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderComment(comment, i) {
        return(
            

            <div className="comment" key={i} >
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" 
                    onClick={ this.props.removeComment.bind(null, this.props.params.postId, i) } >&times;</button>
                </p>
            </div>

        )
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log('submitting form')
        // console.log('author :', this.author)
        // console.log('comment :', this.comment.value)
        
        const { postId }  = this.props.params
        const author = this.author.value
        const comment = this.comment.value
        this.props.addComment(postId, author, comment)
        this.commentForm.reset()

    }

    render(){
        return(
            <div className="comment">
                { this.props.postComments.map(this.renderComment) } 
                <form ref={ (commentForm) => this.commentForm=commentForm } className="comment-form" onSubmit={ e => this.handleSubmit(e) } >
                    <input type="text" ref={ (author) => this.author = author } placeholder="author" />
                    <input type="text" ref={ (comment) => this.comment = comment } placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }

}