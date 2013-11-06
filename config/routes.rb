AddressBook::Application.routes.draw do
  resources :contacts
  root to: 'application#index'
end
