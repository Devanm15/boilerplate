class Api::RegistrationsController < ApplicationController
    skip_after_action :verify_authorized, only: [:create]

    def create
        user = User.create!(
            username: params['user']["username"],
            first_name: params['user']["first_name"],
            last_name: params['user']["last_name"],
            email: params['user']['email'],
            password: params['user']['password'],
            password_confirmation: params['user']['password_confirmation']
        )

        if user
            session[:user_id] = user.id
            render json: {
                status: :created,
                user: user
            }
        else
            render json: {status: 500}
        end
    end
end