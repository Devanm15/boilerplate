FactoryBot.define do
  
  factory :culture_draft do
      id {1}
      name {"culture_draft"}
      description {"something"}
      start_date {1920}
      end_date {2000}
      latitude {0}
      longitude {0}
      source {"wiki"}
      approved {false}
      end

      factory :culture_draft_update, :class => "CultureDraft" do
        description {"something"}
        start_date {1921}
        end_date {2000}
        latitude {0}
        longitude {1}
        source {"wiki, adding to this field"}
        approved {true}
        end

      factory :invalid_culture_draft, :class => "CultureDraft" do
        name {nil}
      end
  end