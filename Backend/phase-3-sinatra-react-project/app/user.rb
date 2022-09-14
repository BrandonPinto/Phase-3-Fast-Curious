class User < ActiveRecord::Base
    has_many :websites
    has_many :cars, through: :websites


    # def mapping
    #     self.second.cars.map{|car| car.engine_name}
    # end
end
