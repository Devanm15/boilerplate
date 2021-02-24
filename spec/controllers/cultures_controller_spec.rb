require 'rails_helper'

RSpec.describe Api::CulturesController, type: :controller do
    before do  
        location_params = attributes_for(:location)
        @culture_params = attributes_for(:culture, locations_attributes: [location_params])
        
        @user = create(:admin)
        session[:user_id] = @user.id
    end
 
    describe "GET #index" do
        it "renders a json of all cultures and locations" do
            location_params = attributes_for(:location)
            @culture_params = attributes_for(:culture, locations_attributes: [location_params])
            get :index

            expect(response).to have_http_status(200)
            expect(JSON.parse(response.body)).to eq([])
        end
        
    end

    describe "GET #show" do 
        it "renders a json of all cultures and locations" do
        location_params = attributes_for(:location)
            @culture_params = attributes_for(:culture, locations_attributes: [location_params])
            get :index

            expect(response).to have_http_status(200)
            expect(JSON.parse(response.body)).to eq([])
        end
    end

    describe "POST #create, /api/cultures" do 
        context "with valid params" do
            it "creates a new culture in the database" do
                expect { post :create, :params => { "culture" => @culture_params } }.to change(Culture, :count).by(1)
            end
        end
        
        context "with invalid params" do
            it "does not create a new culture in the database" do
                @culture_params = attributes_for(:invalid_culture)
                expect { post :create, :params => { "culture" => @culture_params} }.to_not change(Culture, :count)
            end
           
        end
        context "without locations attibutes" do
            it "does not create a new culture in the database" do 
                @culture_params = attributes_for(:culture)
                expect { post :create, :params => { "culture" => @culture_params} }.to_not change(Culture, :count)
            end
        end    
    end

end
