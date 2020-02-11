/* eslint-disable no-trailing-spaces */
import {store} from '../../../src/store/store'
import Card from '../../../src/classes/Models/Card'

let card = new Card(55, 3, 'I', 'f')
let card2 = new Card(34, 2, 'R', 'v')
describe('test store.js getters', () => {
  it('test the store getCurrentPlayerId function', () => {
    store.state.activePlayer = 0
    expect(store.getters.getCurrentPlayerId).to.equal(0)
  })
  it('test the store maxPlayers function maxPlayers', () => {
    store.state.players = []
    expect(store.getters.maxplayers).to.equal(0)
  })
  it('test the store currentPlayerName function', () => {
    expect(store.getters.currentPlayerName).to.equal('')
  })
  it('test the store getCurrentPlayerHand function', () => {
    expect(JSON.stringify(store.getters.getCurrentPlayerHand) === JSON.stringify({})).to.equal(true)
  })
  it('test the store getCurrentPlayerStacks function', () => {
    expect(store.getters.getCurrentPlayerStacks).to.equal(undefined)
  })
  it('test the store getActivePlayer function', () => {
    expect(store.getters.getActivePlayer).to.equal(0)
  })
  it('test the store getActiveCard function', () => {
    expect(store.getters.getActiveCard).to.equal(undefined)
  })
  it('test the store getStacks function', () => {
    expect(Array.isArray(store.getters.getStacks)).to.equal(true)
  })
  it('test the store getPlayers function', () => {
    expect(Array.isArray(store.getters.getPlayers)).to.equal(true)
  })
  it('test the store getIsDiscard function', () => {
    expect(store.getters.getIsDiscard).to.equal(false)
  })
  it('test the store getIsHack function', () => {
    expect(store.getters.getIsHack).to.equal(false)
  })
  it('test the store getAiTurn function', () => {
    expect(store.getters.getAiTurn).to.equal(false)
  })
  it('test the store getHackedPlayer function', () => {
    expect(store.getters.getHackedPlayer).to.equal('')
  })
  it('test the store getCoinFlip function', () => {
    expect(store.getters.getCoinFlip).to.equal(0)
  })
  it('test the store getHasPlayed function', () => {
    expect(store.getters.getHasPlayed).to.equal(false)
  })
  it('test the store getgameState function', () => {
    expect(store.getters.getgameState).to.equal('newGame')
  })
  it('test the store getSelectedStacks function', () => {
    expect(Array.isArray(store.getters.getSelectedStacks)).to.equal(true)
  })
  it('test the store getSelectedStacksBoolean function', () => {
    expect(store.getters.getSelectedStacksBoolean).to.equal(undefined)
  })
  it('test the store getActiveSide function', () => {
    expect(store.getters.getActiveSide).to.equal(true)
  })
  it('test the store getScoreLimit function', () => {
    expect(store.getters.getScoreLimit).to.equal(10)
  })
  it('test the store groupStacks function', () => {
    expect(store.getters.groupStacks).to.equal(false)
  })
  it('test the store trueFalseAnim function', () => {
    expect(store.getters.trueFalseAnim).to.equal(false)
  })
  it('test the store getWinner function', () => {
    expect(store.getters.getWinner).to.equal(false)
  })
  it('test the store getWinnerName function', () => {
    expect(store.getters.getWinnerName).to.equal('')
  })
  it('test the store getWinnerScore function', () => {
    expect(store.getters.getWinnerScore).to.equal(0)
  })
  it('test the store getTips function', () => {
    expect(store.getters.getTips.tutorial).to.equal(true)
  })
  it('test the store getPlayerTurn function', () => {
    expect(store.getters.getPlayerTurn).to.equal(false)
  })
  it('test the store getCurrentPlayer function', () => {
    expect(store.getters.getCurrentPlayer).to.equal(undefined)
  })
  it('test the store getFirstRound function', () => {
    expect(store.getters.getFirstRound).to.equal(true)
  })
  it('test the store getCoinMsg function', () => {
    expect(store.getters.getCoinMsg).to.equal(false)
  })
  it('test the store getTutorialState function', () => {
    expect(store.getters.getTutorialState).to.equal(false)
  })
  it('test the store getFactIndex function', () => {
    expect(store.getters.getFactIndex).to.equal(0)
  })
  it('test the store getTutorialStep function', () => {
    expect(store.getters.getTutorialStep).to.equal(true)
  })
  it('test the store getDiscard function', () => {
    expect(Array.isArray(store.getters.getDiscard)).to.equal(true)
  })
  it('test the store getAiDependent function', () => {
    expect(store.getters.getAiDependent.scoreLimit).to.equal(10)
    let pay = {list: [{name: 'joe', isAi: false}, {name: 'lucy', isAi: true}]}
    store.commit('addPlayers', pay)
    store.state.hands.push({cards: [card], playerId: 0})
    store.state.hands.push({cards: [card2], playerId: 1})
    store.state.activePlayer = 0
    store.commit('addStackToPlayer', {playerId: 0, boolSide: true})
    store.commit('addStackToPlayer', {playerId: 0, boolSide: false})
    store.commit('addStackToPlayer', {playerId: 1, boolSide: true})
    store.commit('addStackToPlayer', {playerId: 1, boolSide: false})
    expect(store.getters.getAiDependent.hand.cards[0].type).to.equal('R')
  })
})
