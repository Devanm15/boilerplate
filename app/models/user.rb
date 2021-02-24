class User < ApplicationRecord
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: { message: "This email has already been used to create an account"}
    validates_uniqueness_of :email, scope: :username
    validates :password, presence: true, length: {minimum: 8}
    validates :username, presence: true, uniqueness: {case_sensitive: false, message: "This username has already been used"}
    has_secure_password

   
end
