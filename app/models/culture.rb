class Culture < ApplicationRecord
  
  has_and_belongs_to_many :locations
  validates :locations, presence: true

  accepts_nested_attributes_for :locations
end
