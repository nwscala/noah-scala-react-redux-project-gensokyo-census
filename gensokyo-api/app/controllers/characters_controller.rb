require_relative "../services/character_serializer.rb"

class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]

  # GET /characters
  def index
    # byebug
    @characters = Character.all.map{ |character| CharacterSerializer.new(character).to_serialized_json}

    render json: @characters
  end

  # GET /characters/1
  def show
    render json: CharacterSerializer.new(@character).to_serialized_json
  end

  # POST /characters
  def create
    @character = Character.new(character_params)

    if @character.save
      render json: CharacterSerializer.new(@character).to_serialized_json, status: :created
    else
      render json: {error: @character.errors, error_messages: @character.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: {error: @character.errors, error_messages: @character.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def character_params
      params.require(:character).permit(:name, :title, :species, :abilities, :occupation, :location)
    end
end
