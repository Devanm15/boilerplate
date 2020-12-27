class LocationPolicy < ApplicationPolicy
    attr_reader :user, :location

  def initialize(user, location)
    @user = user
    @location = location
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