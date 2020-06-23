class CreateCultureDrafts < ActiveRecord::Migration[5.2]
  def change
    create_table :culture_drafts do |t|
          t.string :name
          t.text :description
          t.integer :start_date
          t.integer :end_date
          t.string :source
          t.boolean :approved 
          t.timestamps
        end
  end
end
