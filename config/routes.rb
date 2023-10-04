Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      get 'greetings/random', to: 'greetings#random_greeting'
    end
  end
end
