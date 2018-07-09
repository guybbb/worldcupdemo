import React from 'react'
import {Route} from 'react-router'
import wd from './worldcup.json'
import groups from './worldcup.groups.json'
import teams from './worldcup.teams.json'

export const listOfTeams = groups
    .groups
    .map(group => group.teams.map(team => team.name))
    .reduce((acc, arr) => acc.concat(arr), []);

export const howManyTimesPlayed = (team) => wd
    .rounds
    .map(round => round.matches.filter(match => match.team1.name === team || match.team2.name === team))
    .reduce((agg, round) => (round.length === 0
        ? agg
        : agg + 1), 0)

export const goalScored = (team) => wd
    .rounds
    .map((round) => round.matches.map(match => {
        if (match.team1.name ===team) 
            return match.score1
        if (match.team2.name ===team) 
            return match.score2
    }).reduce((agg, score) => score
        ? agg + score
        : agg, 0))
    .reduce((agg, score) => agg + score, 0)

export const countryNameToCode = (name) => { 
    const result = teams.teams.filter(team => team.name===name)[0].code 
    return result
}

export const createRoute = (component, path) => props => <Route path={path} component={component} exact/>