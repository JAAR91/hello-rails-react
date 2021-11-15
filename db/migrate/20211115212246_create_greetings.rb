class CreateGreetings < ActiveRecord::Migration[6.1]
  def change
    create_table :greetings do |t|
      t.string :message
      t.string :string

      t.timestamps
    end
  end
end
