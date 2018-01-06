import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUsernameChange = this
            .handleUsernameChange
            .bind(this);
        this.handlePasswordChange = this
            .handlePasswordChange
            .bind(this);
        this.handleSubmitClick = this
            .handleSubmitClick
            .bind(this);
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handleSubmitClick() {}

    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h2 className="text-center my-3">Connexion</h2>
                            <form>
                                <div className="form-group">
                                    <label for="pseudo">Pseudo</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        onChange={this.handleUsernameChange}/>

                                </div>
                                <div className="form-group">
                                    <label for="password">Mot de passe</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={this.handlePasswordChange}/>
                                </div>
                                <button className="btn btn-primary btn-block" onClick={this.handleSubmitClick}>Envoyer</button>
                            </form>
                            <hr/>
                            <p className="text-center">
                                <Link to="/signup">Pas de compte ?</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;
