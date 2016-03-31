/**
 * Created by mike on 30/03/2016.
 */
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import styles from '../../css/commentList/AddCommentInput.css'

export default class AddCommentInput extends Component {

    static propTypes = {
        addCommentOne: PropTypes.func.isRequired
    }

    myTargetComments = {
        nameComment1: '',
        textComment1: ''
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="nameComment"
                    autoFocus="true"
                    className={classnames('form-control', styles.addCommentInput)}
                    placeholder="type the name comment"
                    onChange={this.handleChange.bind(this)}
                />
                <textarea
                    type="text"
                    name="textComment"
                    autoFocus="true"
                    className={classnames('form-control', styles.addCommentInput)}
                    placeholder="type the text comment"
                    onChange={this.handleChange.bind(this)}
                />

                <button
                    className={`btn btn-success ${styles.btnAction}`}
                    onClick={() => this.handleSubmit()}
                >Add
                </button>
            </div>
        )
    }

    constructor(props, context) {
        super(props, context)
        this.state = {
            nameComment: this.props.nameComment || '',
            textComment: this.props.textComment || ''
        }
    }

    handleChange(e) {
        if (e.target.name === 'nameComment') {
            this.setState({
                nameComment: e.target.value
            })
            this.myTargetComments.nameComment1 = e.target.value
        } else if (e.target.name === 'textComment') {
            this.setState({
                textComment: e.target.value
            })
            this.myTargetComments.textComment1 = e.target.value
        }
    }

    handleSubmit() {
        const nameComment = this.myTargetComments.nameComment1
        const textComment = this.myTargetComments.textComment1

        this.props.addCommentOne(nameComment, textComment)
    }

}