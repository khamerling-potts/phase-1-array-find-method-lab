// code your solution here
function superbowlWin(array){
    const foundGame = array.find(game => game.result === 'W');
    return !!foundGame ? foundGame.year : undefined;
}