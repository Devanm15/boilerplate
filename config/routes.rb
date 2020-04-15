Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: 'json' } do # /api/data
    get '/locations', to: 'locations#index'
    root 'locations#index'
    resources :locations, only: [:index, :show]
  end

  namespace :api, defaults: { format: 'json' } do # /api/data
    get '/cultures', to: 'cultures#index'
    root 'cultures#index'
    resources :cultures, :locations, only: [:index, :show]
  end
  # namespace :api, defaults: { format: 'json' } do # /api/data
  #   get '/index/locations', to: 'locations#index'
  #   root 'locations#index'
  #   resources :locations, only: [:index, :show]
  # end

  # get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end
