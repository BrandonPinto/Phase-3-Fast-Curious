class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :engine_name
      t.string :car_part
      t.string :wheel_name
      t.string :rim_name
      t.string :spoiler_name
      t.string :body_name
      t.integer :price
      t.string :imgURL
    end
  end
end
