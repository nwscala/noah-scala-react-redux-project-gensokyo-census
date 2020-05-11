class CreateAppearances < ActiveRecord::Migration[6.0]
  def change
    create_table :appearances do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.belongs_to :game, null: false, foreign_key: true
      t.boolean :playable
      t.string :stage

      t.timestamps
    end
  end
end
