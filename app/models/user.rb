class User < ApplicationRecord
    validates :email, presence: true, uniqueness: { message: "This email has already been used to create an account"}
    validates :password, presence: true, length: {minimum: 8}
    has_secure_password

   
end
