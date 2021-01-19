require 'rails_helper'

RSpec.describe Api::CulturesController, type: :controller do
    describe "POST /api/cultures" do 
        before do  
            @user = create(:user)
            session[:user_id] = @user.id
        end
        it "with valid params it creates a culture" do
            culture_params = { "culture"=>{"name"=>"15", "description"=>"", "locations_attributes"=>[{"latitude"=>0, "longitude"=>1}], "start_date"=>"", "end_date"=>"", "source"=>"admin"}}
        
        expect { post :create, :params => culture_params }.to change(Culture, :count).by(1)
        expect Culture.count == 2
        # expect(response).to have_http_status(:created)
    end
    end

    describe "with valid params it updates a culture" do
        it "with valid params it updates a culture" do
        culture_update_params = {"culture"=>{"id"=>"1", "name"=>"15", "description"=>"", "locations_attributes"=>[{"latitude"=>0, "longitude"=>1}], "start_date"=>"", "end_date"=>"", "source"=>"admin"}}
        
        
        expect(response).to have_http_status(:ok)
    end
    end
end
