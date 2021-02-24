require 'rails_helper'

RSpec.describe Api::RegistrationsController, type: :controller do
    describe "POST /api/registrations" do 
        before do  
            @user = attributes_for(:user)
        end
        it "creates user" do 
            expect(response).to have_http_status(:ok) 
            expect{ post :create, :params => { "user" => @user } }.to change(User, :count).by(1)
        end

       
    end
end

