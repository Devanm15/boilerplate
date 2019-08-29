class CreateJoinTableCultureLocation < ActiveRecord::Migration[5.2]
  def change
    create_join_table :cultures, :locations do |t|
      # t.index [:culture_id, :location_id]
      # t.index [:location_id, :culture_id]
    end
  end
end
