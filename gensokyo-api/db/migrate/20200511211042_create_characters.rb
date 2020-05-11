class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :title
      t.string :species
      t.string :abilities
      t.string :occupation
      t.string :location

      t.timestamps
    end
  end
end
