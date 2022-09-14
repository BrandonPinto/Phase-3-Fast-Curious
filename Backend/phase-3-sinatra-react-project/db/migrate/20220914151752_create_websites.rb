class CreateWebsites < ActiveRecord::Migration[6.1]
  def change
    create_table websites do |t|
      t.integer :car_id
      t.integer :user_id
    end
  end
end
