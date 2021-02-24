require 'rails_helper'

RSpec.describe "Registrations", type: :request do
  describe "POST /api/registrations" do 
    before do  
        @user = attributes_for(:user)
    end
    context "with valid params" do
      it "creates user" do 
          expect{ post "/api/registrations", :params => { "user" => @user } }.to change(User, :count).by(1)
      end
    end
    context "without any email" do
      it "does not create a user" do
        @user = {"username" => "Joe", "email" => "", "password" => "blahlahlah", "admin" => false}
        expect{ post "/api/registrations", :params => { "user" => @user } }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
    context "without email format" do
      it "does not create a user" do
        @user = {"username" => "Joe", "email" => "joe", "password" => "blahlahlah", "admin" => false}
        expect{ post "/api/registrations", :params => { "user" => @user } }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
    context "without username" do
      it "does not create a user" do
        @user = {"username" => "", "email" => "joe@me.ca", "password" => "blahlahlah", "admin" => false}
        expect{ post "/api/registrations", :params => { "user" => @user } }.to raise_error(ActiveRecord::RecordInvalid)
      
      end
    end
    context "without a password" do
      it "does not create a user" do
        @user = {"username" => "Joe", "email" => "joe@me.ca", "password" => "", "admin" => false}
        expect{ post "/api/registrations", :params => { "user" => @user } }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
    context "Without matching confirmation password" do
      it "does not create a user" do
        @user = {"username" => "Joe", "email" => "joe@me.ca", "password" => "12345678", "password_confirmation" => "123456987", "admin" => false}
        expect{ post "/api/registrations", :params => { "user" => @user } }.to raise_error(ActiveRecord::RecordInvalid)
      end
    end
  end
end
