function duckDuckGoose(players, goose) {
    let idx = (goose - 1) % players.length;
    return players[idx].name;
}