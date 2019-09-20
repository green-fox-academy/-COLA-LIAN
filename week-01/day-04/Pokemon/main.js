'use strict';

const Pokemon = require('./Pokemon');

const pokemonOfAsh = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

const wildPokemon = new Pokemon('Oddish', 'leaf', 'water');
// Which pokemon should Ash use?

function choosePokemon(wildPokemon){
for(var i = 0; i < initializePokemon().length; i++){
    if(initializePokemon()[i].isEffectiveAgainst(wildPokemon)== true){      
        console.log(initializePokemon()[i].name+'I choose you, ');
    }else{
        continue
    }
    }
}
choosePokemon(wildPokemon);


function initializePokemon() {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}
