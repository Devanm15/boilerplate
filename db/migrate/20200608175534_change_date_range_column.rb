class ChangeDateRangeColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :cultures, :date_range, :string
    add_column :cultures, :start_date, :integer
    add_column :cultures, :end_date, :integer
  end
end
