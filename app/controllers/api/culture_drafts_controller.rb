class Api::CultureDraftsController < ApplicationController
  before_action :set_culture_draft, only: [:show, :update, :destroy]
    def index
        @culture_drafts = policy_scope(CultureDraft)
        render json: @culture_drafts
      end
    
      def show
      end
    
      def create
         @culture_draft = CultureDraft.create create_params
          authorize @culture_draft
      end 
    
      def update
        @culture_draft.update! update_params
        authorize @culture_draft
      end

      def destroy
        @culture_draft = CultureDraft.destroy 
        authorize @culture_draft
      end
    
      private 

      def set_culture_draft
        @culture_draft = CultureDraft.find params[:id]
         authorize @culture_draft
      end
      def create_params
        params.require(:culture_draft).permit(
          :id,
          :name,
          :description,
          :start_date,
          :end_date,
          :source,
          :approved,
          :latitude, 
          :longitude,
          :user_id
        )
      end

      def update_params
        params.require(:culture_draft).permit(
          :approved,
          :latitude, 
          :longitude,
          user_attributes: [:user_id]
        )
      end
    

end
