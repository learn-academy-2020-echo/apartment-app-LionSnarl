Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  #Devise/User Routes + apartment route above
  #Contraints
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  
  #landing page will be React component
  root to: 'home#index'
end
