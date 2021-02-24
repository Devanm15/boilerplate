require 'rails_helper'

RSpec.describe CultureDraft, type: :model do
  it "is not valid without a name" do
    culture_draft = Culture_draft.new(name: "", source: "test")
    expect(culture_draft).to be_invalid 
  end

  it "is not valid without a source" do
    culture_draft = Culture_draft.new(name: "test", source: "")
    expect(culture_draft).to be_invalid 
  end

end
