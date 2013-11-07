require 'spec_helper'

describe Phone do 
  it { should belong_to :contact }
  it { should validate_presence_of :number }
end