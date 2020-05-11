class CreateSpellcards < ActiveRecord::Migration[6.0]
  def change
    create_table :spellcards do |t|
      t.string :name
      t.string :notes
      t.string :star_level_name
      t.string :star_level
      t.text :marisa_comments
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
