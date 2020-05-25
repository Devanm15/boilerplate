class Api::CulturesController < ApplicationController
  before_action :set_culture, only: [:show, :edit, :update, :destroy]

  
  def index
    @cultures = Culture.all
    render json: @cultures, include: :locations
  end

  def show
    @culture = Culture.find params[:id]
    authorize @culture
  
  end

  private

  def culture_params
    params.require(:culture).permit(
      :name,
      :description
    )
  end
end
