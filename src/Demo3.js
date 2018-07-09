import React, {Component, Fragment} from 'react'
import {createRoute, listOfTeams, howManyTimesPlayed, countryNameToCode, goalScored} from './utils'
import ReactCountryFlag from 'react-country-flag';


const DropDownComponent = props => <select onChange={props.onChange} id="dd">
<optgroup>
    <option disabled selected value/> {props
        .options
        .map(option => <option selected={option === props.selected} value={option}>{option}</option>)}
</optgroup>
</select>

const GamesDisplay = (props) => <div>{props.team} Played {props.played} Games</div>
const GoalsDisplay = (props) => <div>Scored {props.goals} Goals </div>

const TeamDisplay = props => <div>
    <ReactCountryFlag code={countryNameToCode(props.team)} />
    {props.team} {props.children}
    </div>

class Demo3 extends Component {
    state = {
        team: null,
        played: null,
        goalScored: null,
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
                <input id="team" type="text" onChange={this.handleTeamSelect} value={this.state.team}/>
                <DropDownComponent
                    selected={this.state.team}
                    default="Choose a team"
                    options={listOfTeams}
                    onChange={this.handleTeamSelect}/>
                <DontRenderIfTeamNotFound played={this.state.played}>
                    <TeamDisplay team={this.state.team}>
                        <GamesDisplay played={this.state.played}/>
                        <GoalsDisplay goals={this.state.goals}/>
                    </TeamDisplay>
                </DontRenderIfTeamNotFound>
            </AppWithHeader>
        );
    }
}

const DontRenderIfTeamNotFound = props => props.played > 1
    ? <Fragment>{props.children}</Fragment>
    : null;

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

export default createRoute(Demo3, '/demo3')