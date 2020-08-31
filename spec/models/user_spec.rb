require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(username: "test", first_name: "test", last_name: "test", email: "test@me.ca", password_digest: "87654321")
    expect(user).to be_valid 
  end
   it "is not valid without an email" do
    user = User.new(username: "test", first_name: "test", last_name: "test", password_digest: "87654321")
    expect(user).to be_invalid 
  end
  it "is not valid without a password" do
    user = User.new(username: "test", first_name: "test", last_name: "test", email:"test@me.ca")
    expect(user).to be_invalid 
  end
end
