class Contact < ActiveRecord::Base 
  has_many :phones
  accepts_nested_attributes_for :phones
  validates :name, :presence => true
end