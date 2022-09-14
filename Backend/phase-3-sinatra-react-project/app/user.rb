class User < ActiveRecord::Base
    has_many :websites
    has_many :cars, through: :websites

end
