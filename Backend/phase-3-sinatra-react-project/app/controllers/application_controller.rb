class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get "/cars" do
      car = Car.where({car_part: ["engine", "wheel", "rim", "spoiler"]})
      car.to_json
  end
  post "/cars" do
    car = Car.create(
      carpart_name: params[:carpart_name],
      car_part: params[:car_part],
      price: params[:price],
      imgURL: params[:imgURL]
    )
    car.to_json
  end
  get "/cars/:part" do
      car = Car.where({car_part: params[:part]})
      car.to_json
  end
  get "/users" do
    user = User.all
    user.to_json
  end
  get "/websites" do
    website = Website.all
    website.to_json
  end
  get '/cars/:id' do
    car = Car.find(params[:id])
    car.to_json
  end
  post "/users" do
    user = User.create(
      username: params[:username],
      password: params[:password]
    )
    user.to_json
  end
  patch "/users/:id" do
    user = User.find(params[:id])
    user.update(
      password: params[:password]
    )
    user.to_json
  end
  delete "/users/:id" do
    user = User.find(params[:id])
    user.destroy
    user.to_json
  end
end
# car = Car.all.pluck("car_part").uniq.filter{|part| part != "body" }
