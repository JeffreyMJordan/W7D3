json.array! @guests.select{|guest| guest.age>=40 && guest.age<=50} do |guest|
  json.name guest.name 
  json.age guest.age 
  json.favorite_color guest.favorite_color
end