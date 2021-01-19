class CultureDraft < ApplicationRecord
    has_and_belongs_to_many :locations
    # validates_associated :locations
    validates :name, presence: true
    validates :source, presence: true 
    # belongs_to :users
    # validates_associated :users 

end
