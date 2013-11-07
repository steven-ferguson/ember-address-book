require 'spec_helper'

describe Contact do 
  it { should have_many :phones }
  it { should validate_presence_of :name } 
end