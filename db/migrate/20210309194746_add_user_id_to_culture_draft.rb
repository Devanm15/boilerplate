class AddUserIdToCultureDraft < ActiveRecord::Migration[6.0]
  def change
    change_table :culture_drafts do |t|
      t.belongs_to :user
    end
  end
end
