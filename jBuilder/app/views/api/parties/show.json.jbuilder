json.name @party.name 
json.location @party.location
json.guests @party.guests do |guest| 
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color

  json.set! :gifts do 
    arr = []
    guest.gifts.each do |gift| 
      arr << {title: gift.title, description: gift.description}
    end
    json.array! arr.uniq
  end
  
end
