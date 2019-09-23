# class Api::CulturesController < ApplicationController

#   def index
#     @cultures = Culture.all
#     render json: @cultures, include: :locations
#   end

#   # def show
#   #   @culture = Culture.find params[:id]
#   # end

#   private

#   def culture_params
#     params.require(:culture).permit(
#       :name,
#       :descrition
#     )
#   end
# end
