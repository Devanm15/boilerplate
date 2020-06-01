class AddToCultures < ActiveRecord::Migration[5.2]
  def change
    add_column :cultures, :date_range, :string
    add_column :cultures, :source, :string
  end
end
