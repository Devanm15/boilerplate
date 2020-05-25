class Api::CulturesController < ApplicationController
  before_action :set_culture, only: [:show, :edit, :update, :destroy]

  
  def index
    @cultures = policy_scope(Culture)
    render json: @cultures, include: :locations
  end

  def show
  end

  private

  def set_culture 
    @culture = Culture.find params[:id]
     authorize @culture
  end

  def culture_params
    params.require(:culture).permit(
      :name,
      :description
    )
  end
end
