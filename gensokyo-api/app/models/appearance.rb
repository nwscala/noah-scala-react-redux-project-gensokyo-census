class Appearance < ApplicationRecord
  belongs_to :character
  belongs_to :game

  validates :playable, inclusion: {in: [true, false]}
  validate :validate_stage

  def validate_stage 
    if(self.playable == false && self.stage.empty?)
      errors.add(:stage, "must exist if character is not playable")
    end

    if(self.playable == true && !self.stage.empty?)
      errors.add(:stage, "must not exist if character is playable")
    end
  end
end
