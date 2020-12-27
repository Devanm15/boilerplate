require 'rails_helper'

RSpec.describe CultureDraft, type: :model do
  it "is not valid without a name" do
    culture = Culture.new(name: "", source: "test")
    expect(culture).to be_invalid 
  end

  it "is not valid without a source" do
    culture = Culture.new(name: "test", source: "")
    expect(culture).to be_invalid 
  end

end
