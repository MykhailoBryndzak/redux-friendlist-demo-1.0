/**
 * Created by mike on 29/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import stylles from '../../css/newsList/AddNewsInput.css';

export default class AddNewsInput extends Component {
    static propTypes = {
        addNews: PropTypes.func.isRequired
    }

    render() {
        return (
            <input
                type="text"
                autofocus="true"
                className={classnames('form-control', stylles.AddNewsInput)}
                placeholder="Type the name of a friend"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                onKeyDown={this.handleSubmit.bind(this)}
            />
        );
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || ''
        };
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit(e) {
        const name = e.target.value.trim();

        if (e.which === 13) {
            this.props.addNews(name);
            this.setState({name: ''})
        }
    }
}