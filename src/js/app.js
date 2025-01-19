import { Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './games.js';


console.log('app worked')

const game = new Game();
game.start();