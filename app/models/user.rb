class User < ApplicationRecord
    validates :email, presence: true, uniqueness: { message: "This email has already been used to create an account"}
    has_secure_password

   
end
