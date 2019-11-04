import React, { Component } from 'react'
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import Home from '../Home/Home'
import AllKanji from '../AllKanji/AllKanji'
import MyKanji from '../MyKanji/MyKanji'
import KanjiHelp from '../KanjiHelp/KanjiHelp'
import Login from '../Login/Login'
import './Header.css'
import Logo from './logo.png'

 

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header className = 'nav'>
                    <div className = 'logo'>
                        <img src = {Logo} alt = 'Logo'/>
                    </div>
                    <div className = 'navlinks'>
                        <NavLink className = 'direct' activeClassName = 'active' exact to = '/' >Home</NavLink>
                        <NavLink className = 'direct' activeClassName = 'active' to = '/all_kanji' >All Ka<span>n</span>ji</NavLink>
                        <NavLink className = 'direct' activeClassName = 'active' to  = '/my_kanji'> My Ka<span>n</span>ji</NavLink>
                        <NavLink className = 'direct' activeClassName = 'active' to = '/kanji_help'>Ka<span>n</span>ji Help</NavLink>
                        <NavLink className = 'direct' activeClassName = 'active' to = '/login'>Login</NavLink>
                    </div>
                </header>
                <Switch>
                    <Route exact path ='/' component = {Home}/>
                    <Route exact path ='/all_kanji' component = {AllKanji}/>
                    <Route exact path ='/my_kanji' component = {MyKanji}/>
                    <Route exact path ='/kanji_help' component = {KanjiHelp}/>
                    <Route exact path ='/login' component = {Login}/>
                  
                
                </Switch>
            </div>
        )
    }
}

export default Header
