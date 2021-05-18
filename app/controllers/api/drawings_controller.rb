class DrawingsController < ApplicationController
  before_action :set_drawing, only: [:show, :update, :destroy]

  # GET /drawings
  def index
    @drawings = Drawing.all

    render json: @drawings
  end

  # GET /drawings/1
  def show
    render json: @drawing
  end

  # POST /drawings
  def create
    @drawing = Drawing.new(drawing_params)

    if @drawing.save
      render json: @drawing, status: :created, location: @drawing
    else
      render json: @drawing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /drawings/1
  def update
    if @drawing.update(drawing_params)
      render json: @drawing
    else
      render json: @drawing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /drawings/1
  def destroy
    @drawing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_drawing
      @drawing = Drawing.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def drawing_params
      params.require(:drawing).permit(:media, :title, :description, :for_sale, :price, :category)
    end
end
