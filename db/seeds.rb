# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
categories = ['drawing','tattoo']
50.times do
Drawing.create(
    title:Faker::Fantasy::Tolkien.character,
    description:Faker::Fantasy::Tolkien.poem,
    for_sale:Faker::Boolean.boolean,
    category:categories[rand(1..2)],
    price:rand(50..200),
    media:'https://images01.military.com/sites/default/files/styles/full/public/2019-09/MightyStocklead1200.jpg?itok=cB1yf-K0'
)
end
puts 'seeded'

# create_table "drawings", force: :cascade do |t|
#     t.string "media"
#     t.string "title"
#     t.string "description"
#     t.boolean "for_sale"
#     t.integer "price"
#     t.string "category"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false