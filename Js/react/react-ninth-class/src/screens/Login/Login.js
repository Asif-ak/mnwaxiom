import React, { Component, Fragment } from 'react';
import './Login.css';
class Login extends Component {

    state = {
        email: "",
        password: "",
        error: ""
    }

    changeHandler = (ev) => {
        console.log("ev.target.name", ev.target.name);
        console.log("ev.target.value", ev.target.value);

        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        console.log("Working");

        const { email, password } = this.state;
        if (email !== "irfanali.17899@gmail.com" || password !== "123456") {
            this.setState({ error: "invalid credentials" })
        } else {
            this.props.history.replace({ pathname: "/dashboard", state: { from: "login" } });
        }
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <Fragment>
                <div className="error">
                {error && <p>{error}</p>}
                </div>
            <div className="container">
                
                <form action="" className="my-form" onSubmit={(ev) => this.onSubmit(ev)}>
                    <input
                        type="text"
                        value={email}
                        onChange={this.changeHandler}
                        name="email"
                        id="email"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={this.changeHandler}
                        name="password"
                        id="password"
                        placeholder="password"
                    />
                    <input
                        type="submit"
                        name="Submit"
                        value="Submit"
                        id="button"
                    />
                </form>

            </div>
            
            </Fragment>
        );
    }
}

export default Login;