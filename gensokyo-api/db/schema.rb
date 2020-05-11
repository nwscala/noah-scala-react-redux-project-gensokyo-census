# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_11_211906) do

  create_table "appearances", force: :cascade do |t|
    t.integer "character_id", null: false
    t.integer "game_id", null: false
    t.boolean "playable"
    t.string "stage"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_appearances_on_character_id"
    t.index ["game_id"], name: "index_appearances_on_game_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.string "species"
    t.string "abilities"
    t.string "occupation"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.string "developer"
    t.string "publisher"
    t.string "release_date"
    t.text "story"
    t.string "genre"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "spellcards", force: :cascade do |t|
    t.string "name"
    t.string "notes"
    t.string "star_level_name"
    t.string "star_level"
    t.text "marisa_comments"
    t.integer "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_spellcards_on_character_id"
  end

  add_foreign_key "appearances", "characters"
  add_foreign_key "appearances", "games"
  add_foreign_key "spellcards", "characters"
end
