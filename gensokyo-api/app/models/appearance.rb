class Appearance < ApplicationRecord
  belongs_to :character
  belongs_to :game

  validates :playable, :stage, presence: true
end
