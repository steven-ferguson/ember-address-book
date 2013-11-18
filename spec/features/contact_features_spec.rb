require 'spec_helper'

feature 'adding a contact' do 
	before do 
		visit root_path
		click_link 'Contacts'
		click_link 'Add a new contact'	
	end

	scenario 'they successfully add a contact', js: true do 
		fill_in 'new-contact-name', with: 'Jim Bo'
		click_button 'Submit'
		Contact.last.name.should eq 'Jim Bo'
	end

	scenario 'they submit an invalid contact', js: true do 
		click_button 'Submit'
		page.should have_content 'invalid'
	end
end

