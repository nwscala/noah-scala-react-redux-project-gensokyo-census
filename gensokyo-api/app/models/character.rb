class Character < ApplicationRecord
    has_many :spellcards
    has_many :appearances
    has_many :games, through: :appearances
end
