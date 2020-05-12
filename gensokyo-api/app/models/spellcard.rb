class Spellcard < ApplicationRecord
  belongs_to :character

  validates :name, presence: true, uniqueness: true
  validates :notes, :star_level_name, :star_level, :marisa_comments, presence: true
end
