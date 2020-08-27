require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(username: "test", first_name: "test", last_name: "test", email: "test@me.ca", password_digest: "87654321")
    expect(user).to be_valid 
  end
 
end
