class Api::PokemonController < ApplicationController


  def show
    @pokemon = Pokemon.includes(:items).find_by_id(params[:id])
    if @pokemon
      render :show
    else
      render json: '{ui: {errors: "Pokemon not found"}}', status: 422
    end
   
  end

  def index 
    @pokemons = Pokemon.all 
    render :index
  end 

  def create 
    @pokemon = Pokemon.new(pokemon_params);
    if @pokemon.save!
      render :show
    else
      render json: '{ui: {errors: "Invalid PokeMan"}}', status: 422
    end
  end 

  def update 
  end 

  def destroy 
  end 

  private
    def pokemon_params
      params.require(:pokemon).permit(:name, :image_url, :attack, :defense, :poke_type, :moves)
    end
  
end
