import React, {Component, Fragment} from 'react'
import {createRoute, howManyTimesPlayed, goalScored} from './utils'
import './App.css';

const TeamDisplay = (props) => <div>{props.team} Played {props.played} Games</div>
const Goals = (props) => <div>{props.goals} Goals Scored</div>

class SearchBox extends Component {
   state = {
       text:''
   }

   changeText = (text) => {
       this.setState({text: text.target.value})
       this.props.onChange(text)
   }

   render() {
       return <input id="team" type="text" placeholder="type a team name" onChange={this.changeText} value={this.state.text}/>
    } 
}

class Demo2 extends Component {
    state = {
        team: null,
        played: null, 
        goalScored: null
    }

    handleTeamSelect = (team) => {
        this.setState({
            team: team.target.value,
            played: howManyTimesPlayed(team.target.value), 
            goals: goalScored(team.target.value), 
        })
    }

    render() {
        return (
            <AppWithHeader>
                <SearchBox onChange={this.handleTeamSelect} />
                <DontRenderIfTeamNotFound played={this.state.played}>
                    <TeamDisplay played={this.state.played} team={this.state.team}/>
                    <Goals goals={this.state.goals} />
                </DontRenderIfTeamNotFound>
            </AppWithHeader>
        );
    }
}

const AppWithHeader = props => (
<Fragment>
    <div className="App-header">
        <div className="App-title">Worldcup ⚽️ 2018👏🏻</div>
    </div>
    <div>
        {props.children}
    </div>
</Fragment>
)

const DontRenderIfTeamNotFound = props => props.played > 1
    ? <Fragment>{props.children}</Fragment>
    : null;

export default createRoute(Demo2, '/demo2')