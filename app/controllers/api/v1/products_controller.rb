class Api::V1::ProductsController < ApplicationController
  def index
    products = Product.all
    render json: products
  end

  def create
    product = Product.create!(product_params)
    if product
      render json: product
    else
      render json: product.errors
    end
  end

  private def product_params
    params.require(:product).permit(:name, :decription, :category, :price)
  end
end
