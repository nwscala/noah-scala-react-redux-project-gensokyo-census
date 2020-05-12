class Character < ApplicationRecord
    has_many :spellcards
    has_many :appearances
    has_many :games, through: :appearances

    validates :name, :title, presence: true, uniqueness: true
    validates :species, :abilities, :location, presence: true
end
