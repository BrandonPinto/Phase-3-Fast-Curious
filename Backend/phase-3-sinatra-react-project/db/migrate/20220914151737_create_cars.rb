class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :car_part
      t.string :carpart_name
      t.integer :price
      t.string :imgURL
    end
  end
end
