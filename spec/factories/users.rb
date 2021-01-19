FactoryBot.define do
  
    factory :user do
      username {"Joe"}
      email {"joe@gmail.com"}
      password {"blahlahlah"}
      admin {true}
    end
  
  end