class CultureDraftPolicy < ApplicationPolicy
  attr_reader :user, :culture_draft

  def initialize(user, culture_draft)
    @user = user
    @culture_draft = culture_draft
  end

    
    def show?
        true
   end

   def create?
    true
   end

   def update?
    true
   end

  class Scope < Scope
    def resolve 
      scope.all 
    end
  end
end 
