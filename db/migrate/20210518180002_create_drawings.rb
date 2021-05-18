class CreateDrawings < ActiveRecord::Migration[6.1]
  def change
    create_table :drawings do |t|
      t.string :media
      t.string :title
      t.string :description
      t.boolean :for_sale
      t.integer :price
      t.string :category

      t.timestamps
    end
  end
end
