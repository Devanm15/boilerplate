# def culture_with_locations(locations_count: 2)
#   create(:culture) do |culture|
#     create_list(:location, locations_count, cultures: [culture])
#   end
# end

FactoryBot.define do
  
  factory :culture do
      id {1}
      name {"culture"}
      description {"something"}
      start_date {1920}
      end_date {2000}
      source {"wiki"}
      end

      factory :culture_update, :class => "Culture" do
        description {"this is changing"}
        start_date {1921}
        end_date {2000}
        source {"wiki, adding to this field"}
        end

      factory :invalid_culture, :class => "Culture" do
        name {nil}
      end
  end