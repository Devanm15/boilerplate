class Api::CultureDraftsController < ApplicationController
    
    def index
        @culture_drafts = policy_scope(Culture_draft)
      end
    
      def show
      end
    
      def create
        @culture_draft = Culture_draft.create create_params
    
        authorize @culture_draft
      end 
    
      def update
      end
    
      private 
      def create_params
        params.require(:culture_draft).permit(
          :id,
          :name,
          :description,
          :start_date,
          :end_date,
          :source,
          :approved,
          locations_attributes: [:latitude, :longitude]
        )
      end
    

end
