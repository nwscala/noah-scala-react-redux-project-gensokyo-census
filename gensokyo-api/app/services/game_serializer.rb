class GameSerializer

    def initialize(game_object)
        @game = game_object
    end

    def to_serialized_json
        @game.as_json(include: [
            :characters => {except: [:created_at, :updated_at]},
            :appearances => {except: [:created_at, :updated_at]} 
            ],
            except: [:created_at, :updated_at])
    end

end