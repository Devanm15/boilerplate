FactoryBot.define do
  
    factory :user do
      id {2}
      username {"Joe"}
      email {"joe@gmail.com"}
      password {"blahlahlah"}
      admin {false}
    end


    factory :admin, :class => "user" do 
      id {1}
      username {"Joe_admin"}
      email {"joe_admin@gmail.com"}
      password {"blahlahlah"}
      admin {true}
    end
  
  end