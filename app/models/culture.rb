class Culture < ApplicationRecord
  
  has_and_belongs_to_many :locations
  validates_associated :locations
  validates :name, presence: true, uniqueness: true
  validates :source, presence: true 

  accepts_nested_attributes_for :locations
end
