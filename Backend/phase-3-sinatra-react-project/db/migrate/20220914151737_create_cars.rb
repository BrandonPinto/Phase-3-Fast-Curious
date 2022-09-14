class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :engine_name
      t.string :type
      t.integer :price
      t.string :imgURL
      t.string :body
    end
  end
end
