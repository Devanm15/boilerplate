class CreateDraftCultures < ActiveRecord::Migration[5.2]
  def change
    create_table :draft_cultures do |t|

      t.timestamps
    end
  end
end
