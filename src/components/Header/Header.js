import React, { Component } from 'react'
import {Route, Switch, Link, NavLink} from 'react-router-dom'
import Home from '../Home/Home'
import AllKanji from '../AllKanji/AllKanji'
import MyKanji from '../MyKanji/MyKanji'
import KanjiHelp from '../KanjiHelp/KanjiHelp'
import Login from '../Login/Login'
 

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
                        <img/>
                    </div>
                    <NavLink className = 'direct' activeClassName = 'active' exact to = '/' >Home</NavLink>
                    <NavLink className = 'direct' activeClassName = 'active' to = '/all_kanji' >All Kanji</NavLink>
                    <NavLink className = 'direct' activeClassName = 'active' to  = '/my_kanji'> My Kanji</NavLink>
                    <NavLink className = 'direct' activeClassName = 'active' to = '/kanji_help'>Kanji Help</NavLink>
                    <NavLink className = 'direct' activeClassName = 'active' to = '/login'>Login</NavLink>
                
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
