class CreatePhones < ActiveRecord::Migration
  def change
    create_table :phones do |t|
      t.string :name
      t.integer :number
      t.belongs_to :contact
    end
  end
end
