require "test_helper"

class DrawingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @drawing = drawings(:one)
  end

  test "should get index" do
    get drawings_url, as: :json
    assert_response :success
  end

  test "should create drawing" do
    assert_difference('Drawing.count') do
      post drawings_url, params: { drawing: { category: @drawing.category, description: @drawing.description, for_sale: @drawing.for_sale, media: @drawing.media, price: @drawing.price, title: @drawing.title } }, as: :json
    end

    assert_response 201
  end

  test "should show drawing" do
    get drawing_url(@drawing), as: :json
    assert_response :success
  end

  test "should update drawing" do
    patch drawing_url(@drawing), params: { drawing: { category: @drawing.category, description: @drawing.description, for_sale: @drawing.for_sale, media: @drawing.media, price: @drawing.price, title: @drawing.title } }, as: :json
    assert_response 200
  end

  test "should destroy drawing" do
    assert_difference('Drawing.count', -1) do
      delete drawing_url(@drawing), as: :json
    end

    assert_response 204
  end
end
