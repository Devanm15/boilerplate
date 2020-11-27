require 'rails_helper'

RSpec.describe "Cultures", type: :request do
    describe "GET index" do
        it "assigns @cultures" do
            culture = Culture.create
            get /culture/index
            expect(assigns(:cultures)).to eq([culture])
        end
    end
end
