class PhonesController < ApplicationController 
  respond_to :json

  def index
    respond_with Phone.all
  end

  def show
    respond_with Phone.find(params[:id])
  end

  def create
    respond_with Phone.create(phone_params)
  end

  def update
    respond_with Phone.update(params[:id], phone_params)
  end

  def destroy
    respond_with Phone.destroy(params[:id])
  end 

private
  def phone_params
    params.require(:phone).permit(:name, :contact_id, :number)
  end
end