require 'rails_helper'

RSpec.describe "Api::Cultures", type: :request do
  before do 
    @location_params = attributes_for(:location)
    @culture_params = attributes_for(:culture, locations_attributes: [@location_params])
    @user = create(:admin)
    login(@user)
  end
  describe "GET #index" do
    it "renders a json of all cultures and locations" do
      get "/api/cultures#index"

      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)).to eq([])
    end
  end

  describe "GET #show" do 
    it "renders a json of all cultures and locations" do
      get "/api/cultures#show"

        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)).to eq([])
    end
  end

  
  describe "POST #create, /api/cultures" do 
    # context "without admin" do
    #   it "does not create a new culture in the database" do
    #     @user = create(:user)
    #     login(@user)
    #       expect { post "/api/cultures#create", :params => { "culture" => @culture_params} }.to_not change(Culture, :count)
    #   end
  
  end
    context "with valid params" do
      it "creates a new culture in the database" do
          expect { post "/api/cultures#create", :params => { "culture" => @culture_params} }.to change(Culture, :count).by(1)
      end
    end

    context "with invalid params" do
        it "does not create a new culture in the database" do
            @culture_params = attributes_for(:invalid_culture)
            expect { post "/api/cultures#create", :params => { "culture" => @culture_params} }.to_not change(Culture, :count)
        end
    
    end

    context "without locations attibutes" do
        it "does not create a new culture in the database" do 
            @culture_params = attributes_for(:culture)
            expect { post "/api/cultures#create", :params => { "culture" => @culture_params} }.to_not change(Culture, :count)
        end
    end  
  end
 
  describe "PUT #update, /api/cultures/id" do
    
    context "with valid params" do
      it "updates a culture in the database" do
        @culture_params = create(:culture, locations_attributes: [@location_params])
          culture_update_params = attributes_for(:culture_update, locations_attributes: [@location_params])
           patch "/api/cultures/#{@culture_params[:id]}", :params => {"culture" => culture_update_params }
           @culture_params.reload
         
          expect(@culture_params.longitude).to eq "this is changing"
          expect(@culture_params.name).to eq "culture"
      end
    end

    context "with invalid params" do
        it "does not update a culture in the database" do
          @culture_params = create(:culture, locations_attributes: [@location_params])
          culture_update_params = attributes_for(:culture_update)
           patch "/api/cultures/#{@culture_params[:id]}", :params => {"culture" => culture_update_params }
           @culture_params.reload
         
          expect(@culture_params.description).to_not eq "this is changing"
          expect(@culture_params.name).to eq "culture"
        end 
    end
    
  end

end
