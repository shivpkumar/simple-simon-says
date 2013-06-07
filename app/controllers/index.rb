get '/' do
  erb :index
end

post '/color' do
  cell = rand(1..9)
  color = "#" + "%06x" % (rand * 0xffffff)
  json_array = [ cell, color].to_json
end
