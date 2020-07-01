# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_01_013456) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "culture_drafts", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "start_date"
    t.integer "end_date"
    t.string "source"
    t.boolean "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
  end

  create_table "cultures", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "source"
    t.integer "start_date"
    t.integer "end_date"
  end

  create_table "cultures_locations", id: false, force: :cascade do |t|
    t.bigint "culture_id", null: false
    t.bigint "location_id", null: false
    t.index ["culture_id", "location_id"], name: "index_cultures_locations_on_culture_id_and_location_id"
    t.index ["location_id", "culture_id"], name: "index_cultures_locations_on_location_id_and_culture_id"
  end

  create_table "locations", force: :cascade do |t|
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
