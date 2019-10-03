class Api::LocationsController < ApplicationController

    def index
      @locations = Location.all
      render json: @locations, include: :cultures
    end
end