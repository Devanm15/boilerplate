class Api::LocationsController < ApplicationController

    def index
      @locations = Location.all
      render json: @locations
    end
  
    # def show
    #   @culture = Culture.find params[:id]
    # end
  
    private
  
  end
  