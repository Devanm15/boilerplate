class CulturePolicy < ApplicationPolicy
    attr_reader :user, :culture

  def initialize(user, culture)
    @user = user
    @culture = culture
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