class Api::PokemonController < ApplicationController


  def show
    @pokemon = Pokemon.includes(:items).find_by_id(params[:id])
    render :show
  end

  def index 
    @pokemons = Pokemon.all 
    render :index
  end 

  def create 
  end 

  def update 
  end 

  def destroy 
  end 
  
end
