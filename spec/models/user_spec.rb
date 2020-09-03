require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(username: "test", first_name: "test", last_name: "test", email: "test@me.ca", password: "87654321")
    expect(user).to be_valid 
  end
   it "is not valid without an email" do
    user = User.new(username: "test", first_name: "test", last_name: "test", password: "87654321")
    expect(user).to be_invalid 
  end
  it "is not valid without a password" do
    user = User.new(username: "test", first_name: "test", last_name: "test", email:"test@me.ca")
    expect(user).to be_invalid 
  end
  it "is not valid without a password of 8 characters" do
    user = User.new(username: "test", first_name: "test", last_name: "test", email:"test@me.ca", password:"345")
    expect(user).to be_invalid 
  end
  it "is not valid without username" do
    user = User.new( first_name: "test", last_name: "test", email:"test@me.ca", password:"34543211")
    expect(user).to be_invalid
  end
  
 
end
