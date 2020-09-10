require 'rails_helper'

RSpec.describe Culture, type: :model do
  it { should have_and_belong_to_many(:locations)} 
  
end
