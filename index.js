const team = {
  _players: [
    { firstName: "christain", lastName: "ronaldo", Age: 35 },
    { firstName: "Mohamed", lastName: "salah", Age: 30 },
    { firstName: "Gabriel ", lastName: " Batistuta", Age: 69 },
  ],
  _games: [
    { opponent: "Nal", teamPoints: 62, opponentPoints: 20 },
    { opponent: "sal", teamPoints: 63, opponentPoints: 30 },
    { opponent: "ego", teamPoints: 73, opponentPoints: 40 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  //team.players
  //console.log(team)
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: "heba",
      lastName: "omar",
      age: 25,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

//team.addPlayer('heba','omar',76)
//console.log(team.players);
team.addGame("titans", 100, 98);
console.log(team.games);
