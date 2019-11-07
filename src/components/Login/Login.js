import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setUser} from '../../reducer/userReducer'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
                 
        }
        this.login = this.login.bind(this)
    }

    async login() {
        const {username, password} = this.state
        const loggedInUser = await axios.post('/auth/login', {
            username,
            password
        })
        console.log(1111, loggedInUser)
        this.props.setUser(loggedInUser.data)
        this.props.history.push('/my_kanji/')
    }

   

    render() {

        const {username, password} = this.state

        return (
            <div className = 'background'>

                <div className = 'login-container'>
                    <form onSubmit = {e => {this.login()}}>
                        <div className = 'login-label-container' ><label>My Ka<span>n</span>ji Login</label></div>
                        <input className = 'login-input top-login-input' placeholder = 'Username' value = {username} onChange = {(e) => this.setState({
                            username:e.target.value
                        })}/>
                        <input className = 'login-input' placeholder = 'Password' type = 'password' value = {password} onChange = {(e) => this.setState({
                            password:e.target.value
                        })}/>
                        
                            
                        
                        <div className = 'login-button-container'>
                                <button className = 'login-button register-button'>
                                    <NavLink className = 'route-link' to = {'/signup/'}>
                                        Register
                                    </NavLink>
                                </button>
                            <button className = 'login-button'>Login</button>
                         </div>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return state
}

const mapDispatchToProps = {
    setUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
