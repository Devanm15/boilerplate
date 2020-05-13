if Rails.env == "production"
Rails.application.config.session_store :cookies_store, key:"_medicine_app", domain: "medicine-app/heroku.com"
else 
    Rails.application.config.session_store :cookies_store, key: "_medicine_app"
    end