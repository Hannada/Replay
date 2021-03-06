import React from 'react'

class CommentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {body: ''}
        this.handleComment = this.handleComment.bind(this)
    }

    handleComment(e){
        e.preventDefault();
        if (this.props.currentUser){
            this.setState({body: ''})
            this.props.createComment(this.state, this.props.videoId)
        } else {
            this.props.history.push('/login')
        }
    }

    update(field){
        return e => this.setState( {[field]: e.target.value})
    }

    render(){
        const propic = this.props.currentUser ? this.props.currentUser.first_name[0] :  <i className="comment-loggedout-pro-pic fas fa-user-circle "></i>
        const propicClass = this.props.currentUser ? 'pro-pic-initial' : '';
        return <div className='video-show-comment-form'>
                        <form className='comment-form' onSubmit={this.handleComment}>
                            <div className={`video-show-pro-pic ${propicClass}`}>{propic}</div>
                            <input type="text"
                                    placeholder='Add a public comment...'
                                    onChange={this.update('body')}
                                    value={this.state.body}/>
                            <button className='comment-button' type='submit'>Add Comment</button>
                        </form >
                </div>
    }
}

export default CommentForm