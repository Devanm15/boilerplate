class AddLocationsToCultureDraft < ActiveRecord::Migration[5.2]
  def change
    add_column :culture_drafts, :latitude, :float 
    add_column :culture_drafts, :longitude, :float  
  end
end
