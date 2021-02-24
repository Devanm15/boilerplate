require 'rails_helper'

RSpec.describe "Api::CultureDrafts", type: :request do
    before do 
      # @location_params = attributes_for(:location)
      @culture_draft_params = attributes_for(:culture_draft)
      @user = create(:user)
      login(@user)
    end
    describe "GET #index" do
      it "renders a json of all culture_drafts and locations" do
        get "/api/culture_drafts#index"
  
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)).to eq([])
      end
    end
  
    describe "GET #show" do 
      it "renders a json of all culture_drafts and locations" do
        get "/api/culture_drafts#show"
  
          expect(response).to have_http_status(200)
          expect(JSON.parse(response.body)).to eq([])
      end
    end
  
    
    describe "POST #create, /api/culture_drafts" do 
    
      context "with valid params" do
        it "creates a new culture_draft in the database" do
            expect { post "/api/culture_drafts#create", :params => { "culture_draft" => @culture_draft_params} }.to change(CultureDraft, :count).by(1)
        end
      end
  
      context "with invalid params" do
          it "does not create a new culture_draft in the database" do
              @culture_draft_params = attributes_for(:invalid_culture_draft)
              expect { post "/api/culture_drafts#create", :params => { "culture_draft" => @culture_draft_params} }.to_not change(CultureDraft, :count)
          end
      
      end
  
      # context "without locations" do
      #     it "does not create a new culture_draft in the database" do 
      #         @culture_draft_params = attributes_for(:culture_draft)
      #         expect { post "/api/culture_drafts#create", :params => { "culture_draft" => @culture_draft_params} }.to_not change(CultureDraft, :count)
      #     end
      # end  
    end
   
    describe "PUT #update, /api/culture_drafts/id" do
      before do 
      @user = create(:admin)
      login(@user)
      end
      context "with valid params" do
        
        it "updates a culture_draft in the database" do
          @culture_draft_params = create(:culture_draft)
            culture_update_draft_params = attributes_for(:culture_draft_update)
             patch "/api/culture_drafts/#{@culture_draft_params[:id]}", :params => {"culture_draft" => culture_update_draft_params }
             @culture_draft_params.reload
           
            expect(@culture_draft_params.longitude).to eq 1
            expect(@culture_draft_params.name).to eq "culture_draft"
        end
      end
  
      context "with invalid params" do
          it "does not update a culture_draft in the database" do
            @culture_draft_params = create(:culture_draft)
            culture_draft_update_params = attributes_for(:culture_draft_update)
             patch "/api/culture_drafts/#{@culture_draft_params[:id]}", :params => {"culture_draft" => culture_draft_update_params }
             @culture_draft_params.reload
           
            expect(@culture_draft_params.description).to_not eq "this is changing"
            expect(@culture_draft_params.name).to eq "culture_draft"
          end 
      end  
    end
end
