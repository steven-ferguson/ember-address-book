require 'spec_helper'

feature 'add a phone to an existing contact' do

  before do 
    contact = FactoryGirl.create(:contact)
    visit root_path
    click_link 'Contacts'
    click_link contact.name
  end

  scenario 'they successfully add a phone', js: true do 
    click_button 'Add a Phone'
    fill_in 'new-phone', with: '281-330-8004'
    click_button 'Submit'
    within('#phones') { page.should have_content '281-330-8004' }
  end

  scenario 'they submit an invalid phone', js: true do 

  end
end