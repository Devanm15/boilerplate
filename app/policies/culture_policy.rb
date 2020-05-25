class CulturePolicy < ApplicationPolicy
    attr_reader :user, :culture

  def initialize(user, culture)
    @user = user
    @culture = culture
  end

    def index?
        true
       end
    def show?
        true
   end
end 