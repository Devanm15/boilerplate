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

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2020_05_11_000108) do
=======
ActiveRecord::Schema.define(version: 2020_05_10_202317) do
>>>>>>> 728ba3949a4da53d0404af64832f3b97cfdd7adb

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cultures", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
