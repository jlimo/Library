import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputeChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                    <input type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                    <input type="submit">Register</input>
                </form>
            </div>
        )
    }
}

export default Register;