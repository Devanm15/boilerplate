class ApplicationController < ActionController::API
#   protect_from_forgery :exception
  skip_before_action :verify_authenticity_token, raise: false
  include Pundit
  after_action :verify_authorized, except: :index
end
