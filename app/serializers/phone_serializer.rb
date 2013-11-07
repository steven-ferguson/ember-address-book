class PhoneSerializer < ActiveModel::Serializer
  attributes :id, :name, :number
  belongs_to :contact
end