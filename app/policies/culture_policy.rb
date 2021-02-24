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
    @user && @user.admin? 
   end

   def update?
    @user && @user.admin?
   end

  class Scope < Scope
    def resolve
      scope.all
    end
  end
end 