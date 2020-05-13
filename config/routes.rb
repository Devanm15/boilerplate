Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logout_in, to: "sessions#logged_in"
  namespace :api, defaults: { format: 'json' } do # /api/data
    get '/index', to: 'cultures#index'
    root 'cultures#index'
    resources :cultures, :locations, only: [:index, :show]
  end
  
  # get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end
