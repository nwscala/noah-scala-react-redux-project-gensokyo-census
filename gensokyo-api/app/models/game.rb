class Game < ApplicationRecord
    has_many :appearances
    has_many :characters, through: :appearances

    validates :name, :story, presence: true, uniqueness: true
    validates :developer, :publisher, :release_date, :genre, presence: true
end
