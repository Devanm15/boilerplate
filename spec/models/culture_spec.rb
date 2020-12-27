require 'rails_helper'

RSpec.describe Culture, type: :model do
  it { should have_and_belong_to_many(:locations)} 

  it "is not valid without a name" do
    culture = Culture.new(name: "", source: "test")
    expect(culture).to be_invalid 
  end

  it "is not valid without a source" do
    culture = Culture.new(name: "test", source: "")
    expect(culture).to be_invalid 
  end

  describe "it should accept nested attributes for locations" do
    it{ should accept_nested_attributes_for :locations }
  end
  
end
