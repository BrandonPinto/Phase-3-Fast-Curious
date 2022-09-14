User.destroy_all
Car.destroy_all
Website.destroy_all


puts "Creating users"

User.create(username: "bob", password: "abc123")
User.create(username: "fred", password: "abc123")
User.create(username: "jeff", password: "abc123")
User.create(username: "george", password: "abc123")

puts "Creating cars"

Car.create(carpart_name:"Supercharged 5.2-Liter V8: A Predator", car_part:"engine",price: 10000,imgURL:"https://fordauthority.com/wp-content/uploads/2019/08/2020-Shelby-GT500-Engine-Details-007.jpg")
Car.create(carpart_name:"High Output Turbocharged 6.7-Liter Inline-Six", car_part:"engine", price: 15000,imgURL:"https://bioage.typepad.com/.a/6a00d8341c4fbe53ef022ad3cfa516200b-550wi")
Car.create(carpart_name:"SKYACTIV-G 2.0-Liter Inline-Four", car_part:"engine",price: 12000,imgURL:"http://australiancar.reviews/_images2/reviews/mazda_skyactivg20_engine_ser1_01.jpg")
Car.create(carpart_name:"20-inch Tire-set",car_part:"wheel",price: 899, imgURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61PXttM6xML._AC_SX679_.jpg")
Car.create(carpart_name:"21-inch Tire-set",car_part:"wheel",price: 1099, imgURL: "https://cdn.shopify.com/s/files/1/1724/5219/products/tesla-model-s-3-x-y-21-inch-forged-aftermarket-wheel-tire-package-114-matte-black_4000x@3x.progressive.jpg?v=1653067901")
Car.create(carpart_name:"32-inch Tire-set",car_part:"wheel",price: 1399, imgURL: "https://www.motoxmall.com/images/virtuemart/product/moto-ravage-all-terrain-tire-wheel-kit-14.jpg")
Car.create(carpart_name: "Anovia Elder", car_part:"rim",price: 999,imgURL:"https://images.customwheeloffset.com/wheels-compressed/anovia/elder/elder_brushedapollosilver_left_white.jpg")
Car.create(carpart_name: "Work Emotion D9R",car_part:"rim", price: 1099,imgURL:"https://images.customwheeloffset.com/wheels-compressed/work/emotiond9r/emotiond9r_white_white.jpg")
Car.create(carpart_name: "Enkei RPF1",car_part:"rim", price: 899,imgURL:"https://enkei.com/wp-content/uploads/2019/12/ENKEI-RPF1-BK-132-WEB.jpg")
Car.create(carpart_name: "Wing spoiler", car_part:"spoiler",price: 399, imgURL: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61FIcC3MnkL._AC_SX679_.jpg")
Car.create(carpart_name: "Duck-Tail spoiler", car_part:"spoiler", price: 499, imgURL: "https://www.driftshop.com/media/catalog/product/0/3/7/8/4/8/large-ducks13-2.jpg")
Car.create(carpart_name: "Pedestal spoiler", car_part:"spoiler", price: 285, imgURL: "https://www.evasivemotorsports.com/mm5/graphics/00000001/anderson/AC-RS15FDMU-AT-GF_01_640x640.jpg")
Car.create(carpart_name:"G86 Body", car_part:"body",price: 29999,imgURL:"https://ic.carid.com/duraflex/items/112646-oncar-01_6.jpg")
Car.create(carpart_name:"Supra MK:V", car_part:"body",price: 59999,imgURL:"https://cdn-ds.com/blogs-media/sites/232/2019/04/23151839/2020-Toyota-Supra-Renaissance-Red-2.0_o.jpg")
Car.create(carpart_name:"Camry", car_part:"body",price: 12999,imgURL:"https://www.kindpng.com/picc/m/348-3482956_toyota-camry-toyota-camry-2019-singapore-price-hd.png")

puts "creating website"
Website.create(car_id: Car.all.sample.id, user_id:User.all.sample.id)
Website.create(car_id: Car.all.sample.id, user_id:User.all.sample.id)
Website.create(car_id: Car.all.sample.id, user_id:User.all.sample.id)
Website.create(car_id: Car.all.sample.id, user_id:User.all.sample.id)

puts "seeding is done"