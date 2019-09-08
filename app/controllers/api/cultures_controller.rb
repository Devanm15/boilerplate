class Api::EventsController < ApplicationController
    respond_to :json
  
    def index
      respond_with Culture.order(culture_date: :DESC)
    end
  
    def show
      respond_with Culture.find(params[:id])
    end
  
    # def create
    #   respond_with :api, Culture.create(culture_params)
    # end
  
    # def destroy
    #   respond_with Culture.destroy(params[:id])
    # end
  
    # def update
    #   culture = Culture.find(params['id'])
    #   culture.update(culture_params)
    #   respond_with Culture, json: culture
    # end
  
    private
  
    def culture_params
      params.require(:culture).permit(
        # :id,
        :name,
        :descrition
      )
    end
  end