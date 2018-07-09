import React, {Component, Fragment} from 'react'
import {createRoute, howManyTimesPlayed, goalScored} from './utils'

const TeamDisplay = (props) => <div>Played {props.played} Games</div>
const Goals = (props) => <div>{props.goals} Goals Scored</div>


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
                <input id="team" onChange={this.handleTeamSelect} value={this.state.team}/>
                <DontRenderIfTeamNotFound played={this.state.played}>
                    <TeamDisplay played={this.state.played}/>
                    <Goals goals={this.state.goals} />
                </DontRenderIfTeamNotFound>
            </AppWithHeader>
        );
    }
}

const AppWithHeader = props => (
    <div className="App">
        <h2>Worldcup 2018 by Guy Balzam</h2>
        {props.children}
    </div>
)

const DontRenderIfTeamNotFound = props => props.played > 1
    ? <Fragment>{props.children}</Fragment>
    : null;

export default createRoute(Demo2, '/demo2')