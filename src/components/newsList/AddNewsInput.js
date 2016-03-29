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

    render() {
        return (
            <div>
                <input
                    type="text"
                    autofocus="true"
                    className={classnames('form-control', styles.AddNewsInput)}
                    placeholder="Type the name of a friend"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this.name)}
                    onKeyDown={this.handleSubmit.bind(this)}/>
                <textarea
                    type="text"
                    autofocus="true"
                    className={classnames('form-control', styles.AddNewsInput)}
                    placeholder="Description news..."
                    value={this.state.text}
                    onChange={this.handleChange.bind(this.text)}
                    onKeyDown={this.handleSubmit.bind(this)}
                />

                <button className={`btn btn-success ${styles.btnAction}`}> Add </button>
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
        this.setState({
            name: e.target.value,
            text: e.target.value
        });
    }

    handleSubmit(e) {
        const name = e.target.value.trim();
        const text = e.target.value.trim();

        if (e.which === 13) {
            this.props.addNews(name);
            this.props.addNews(text);
            this.setState({name: ''});
            this.setState({text: ''});

        }
    }
}