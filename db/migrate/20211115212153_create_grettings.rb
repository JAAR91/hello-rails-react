class CreateGrettings < ActiveRecord::Migration[6.1]
  def change
    create_table :grettings do |t|
      t.string :message
      t.string :strtring

      t.timestamps
    end
  end
end
