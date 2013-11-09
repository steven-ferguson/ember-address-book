class PhoneSerializer < ActiveModel::Serializer
  attributes :id, :name, :number
  has_one :contact
end