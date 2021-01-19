### initial file setup for React in Rails
- rails new apartment_app -d postgresql -T
- cd 
- rails db:create
- bundle add react-rails
- rails webpacker:install
- rails webpacker:install:react
- rails g react:install
- rails g react: component App
- rails g controller Home
- Add to *app/view/home/index.html.erb
    <%= react_component "App" %>
- Add to *config/routes ` root to: 'home#index' `
- bundle add rspec-rails
- rails generate rspec:install

Now adding authenthication(key in the lock! can you prove who you say you are!) & authorization (what door are you opening! what do you have access to as a signed-in user?)
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate
- rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
- rails db:migrate


add: `config.action_mailer.default_url_options = { host: 'localhost', port: 3000 } `
to config/environments/development.rb

Now have a sign up page
http://localhost:3000/users/sign_up

### So far, Added apartments
    - Apartments belong to user
    - User has many Apartments
changed the devise.rb from :delete to :get line 270
- bundle add bootstrap
- add import to sass file `@import 'bootstrap'`
- yarn add reactstrap

- yarn add react-router-dom
- import components to App.js
- set up static routes for Home, Index, Show, NotFound

- pass devise routes to header
- conditional rendering for sign in and sign out

## index page
- refactor route to be dynamic
- passes state to index
- mapped over the array and displayed the street, city, state
- Mock of show button

## Show
- Dynamic Route
- Pass one apartment and display content
