AddressBook::Application.routes.draw do
  resources :contacts
  resources :phones
  root to: 'application#index'
end
