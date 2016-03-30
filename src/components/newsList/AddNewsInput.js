/**
 * Created by mike on 29/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from '../../css/newsList/AddNewsInput.css';

export default class AddNewsInput extends Component {
    static propTypes = {
        addNews: PropTypes.func.isRequired
    }

    myTarget = {
        name1: '',
        text1: ''
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="name"
                    autofocus="true"
                    className={classnames('form-control', styles.AddNewsInput)}
                    placeholder="Type the name of a friend"
                    onChange={this.handleChange.bind(this)}
                />

                <textarea
                    type="text"
                    name="text"
                    autofocus="true"
                    className={classnames('form-control', styles.AddNewsInput)}
                    placeholder="Description news..."
                    onChange={this.handleChange.bind(this)}
                />

                <button
                    className={`btn btn-success ${styles.btnAction}`}
                    onClick={() => this.handleSubmit()}
                >Add
                </button>
            </div>
        );
    }


    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || '',
            text: this.props.text || ''
        };
    }

    handleChange(e) {
        if(e.target.name == 'name'){
            this.setState({
                name: e.target.value,
            });
            this.myTarget.name1 = e.target.value;
        } else if(e.target.name == 'text') {
            this.setState({
                text: e.target.value
            });
            this.myTarget.text1 = e.target.value;
        }

    }

    handleSubmit() {
        const name = this.myTarget.name1;
        const text = this.myTarget.text1;

        this.props.addNews(name, text)

    }

}