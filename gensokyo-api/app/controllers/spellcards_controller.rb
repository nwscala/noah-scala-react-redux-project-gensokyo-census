class SpellcardsController < ApplicationController
  before_action :set_spellcard, only: [:show, :update, :destroy]

  # GET /spellcards
  def index
    @spellcards = Spellcard.all

    render json: @spellcards
  end

  # GET /spellcards/1
  def show
    render json: @spellcard
  end

  # POST /spellcards
  def create
    @spellcard = Spellcard.new(spellcard_params)

    if @spellcard.save
      render json: @spellcard, status: :created
    else
      render json: {error: @spellcard.errors, error_messages: @spellcard.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /spellcards/1
  def update
    if @spellcard.update(spellcard_params)
      render json: @spellcard
    else
      render json: {error: @spellcard.errors, error_messages: @spellcard.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

  # DELETE /spellcards/1
  def destroy
    @spellcard.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_spellcard
      @spellcard = Spellcard.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def spellcard_params
      params.require(:spellcard).permit(:name, :notes, :star_level_name, :star_level, :marisa_comments, :character_id)
    end
end
