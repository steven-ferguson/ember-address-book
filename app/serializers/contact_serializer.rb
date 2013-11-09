class ContactSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :name
  has_many :phones
end