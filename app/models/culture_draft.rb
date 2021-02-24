class CultureDraft < ApplicationRecord
    has_and_belongs_to_many :locations
    validates :latitude, presence: true
    validates :longitude, presence: true
    validates :name, presence: true
    validates :source, presence: true 
end
