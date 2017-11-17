json.set! :pokemon do 
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  begin
    json.image_url asset_path(@pokemon.image_url)
  rescue
    json.image_url @pokemon.image_url
  end
  json.item_ids @pokemon.items.pluck(:id)
end

json.set! :items do 
  json.array! @pokemon.items, :id, :name, :pokemon_id, :price, :happiness, :image_url
end