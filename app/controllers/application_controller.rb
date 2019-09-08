require "application_responder"

class ApplicationController < ActionController::API
  protect_from_forgery with: :null_session
  # self.responder = ApplicationResponder
  # respond_to :html

end
