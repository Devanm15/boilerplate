class Api::LocationsController < ApplicationController

    # def index
    #   @locations = Location.all
    #   render json: @locations
    # end
  
    # def show
    #   @location = Locations.find params[:id]
    # end

    def create
      @location = Location.create create_params
       
       authorize @location
     end 
  
    private
  
    def create_params
      params.require(:location).permit(
        :id,
        :latitude,
        :longitude,
      )
    end
  end
  
