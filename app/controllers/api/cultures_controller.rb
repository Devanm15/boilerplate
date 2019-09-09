class Api::CulturesController < ApplicationController
    # respond_to :json
  
    def index
      respond_with Culture.all.order(name: :DESC)
    end
  
    def show
      respond_with Culture.find params[:id] 
    end
  
    private
  
    def culture_params
      params.require(:culture).permit(
        :name,
        :descrition
      )
    end
  end