class CharacterSerializer

    def initialize(character_object)
        @character = character_object
    end

    def to_serialized_json
        @character.as_json(include: [
            :games => {except: [:created_at, :updated_at]},
            :appearances => {except: [:created_at, :updated_at]}, 
            :spellcards => {except: [:created_at, :updated_at]}
            ],
            except: [:created_at, :updated_at])
    end

end