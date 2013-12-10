namespace :db do 
	desc "Fill database with sample data"
	task populate: :environment do 
		99.times do |n|
			name = Faker::Name.name
			Contact.create!(name: name)
		end
	end
end
