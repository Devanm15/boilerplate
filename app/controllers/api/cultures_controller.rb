class Api::CulturesController < ApplicationController
  respond_to :json

  def index
    @cultures = Culture.all
    respond_with @cultures
  end

  def show
    @culture = Culture.find params[:id]
  end

  private

  def culture_params
    params.require(:culture).permit(
      :name,
      :descrition
    )
  end
end
