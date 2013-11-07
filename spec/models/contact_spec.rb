require 'spec_helper'

describe Contact do 
  it { should have_many :phones }
  it { should accept_nested_attributes_for :phones }
  it { should validate_presence_of :name } 
end