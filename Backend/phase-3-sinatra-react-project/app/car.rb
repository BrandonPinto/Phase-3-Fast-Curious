class Car < ActiveRecord::Base
    has_many :websites
    has_many :users, through: :websites

end
