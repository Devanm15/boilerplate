require 'rails_helper'

RSpec.describe Location, type: :model do
 it { should have_and_belong_to_many(:cultures)} 
end
