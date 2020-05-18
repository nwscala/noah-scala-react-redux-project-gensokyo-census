# Gensokyo Census
This application allows the user to create a character with a name, title, species, abilities, occupation, and location to reside in Gensokyo, the setting of the [Touhou Project](https://en.touhouwiki.net/wiki/Touhou_Project) series of video games. The user can also create games with a name, developer, publisher, release date, story, and genre. Once a game and character are created, the user can link the two of them with an appearance which predetermines either the game_id or character_id value based on whichever object you're creating it from, a character_id/game_id of the object you're not creating from, a stage (where the character appeared in the game), and an indicator of whether or not the character was playable. Lastly, characters also have spellcards with names, notes, star level names, star levels, and Marisa's comments. At present all data for spellcards comes from the official text [The Grimoire of Marisa](https://en.touhouwiki.net/wiki/The_Grimoire_of_Marisa) and as such may not be up to date with the most recent entries of the Touhou Project or may not include all spellcards from characters mentioned within it, but regardless of data defeciency, it is one of the most concrete sources for data on spellcards.

## Installation
Fork or clone this repository, cd into backend, gensokyo-api, run rails db:seed, then rails db:migrate in the console, run rails s in the console, then cd into the frontend, gensokyo-client, and run yarn start in the console. Lastly, navigate to localhost:3000 on your internet browser to begin using the app

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/nwscala/noah-scala-react-redux-project-gensokyo-census. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
