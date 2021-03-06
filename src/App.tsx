import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Route from "react-router-dom";

const App = (props) => (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path='/dialogs' component={Dialogs}/>*/}
                {/*<Route path='/profile' component={Profile}/>*/}
                {/*<Route path='/news' component={News}/>*/}
                {/*<Route path='/music' component={Music}/>*/}
                {/*<Route path='/settings' component={Settings}/>*/}
                {/*<Route path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>*/}
                <Route path='/dialogs' render={()=><DialogsContainer store={props.store}/>}/>
                {/*<Route path='/profile' render={()=><Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>*/}
                <Route path='/profile' render={()=><Profile store={props.store}/>}/>
                <Route path='/news' render={()=><News/>}/>
                <Route path='/music' render={()=><Music/>}/>
                <Route path='/settings' render={()=><Settings/>}/>
            </div>
        </div>
);
export default App;
