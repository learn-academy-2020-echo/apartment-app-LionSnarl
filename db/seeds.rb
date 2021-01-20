#mah seeds 
#creating a user
user = User.create email: 'ryan@test.com', password: '123456', password_confirmation: '123456'
#creating apartments!
apartments = [
    {
        street: "221B baker St",
        city: "London",
        state: "UK",
        manager: "Ms. Hud",
        email: "Ms-hud@uk.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "no",
        user_id: user.id
    },
    {
        street: "42 Wallaby Way",
        city: "Sydney",
        state: "AU",
        manager: "P. Sherman",
        email: "p-sherman@au.com",
        price: "3200",
        bedrooms: 3,
        bathrooms: 2.5,
        pets: "yes",
        user_id: user.id
    },
    {
        street: "1 La Avanzada St",
        city: "San Francisco",
        state: "CA",
        manager: "Adolph Sutro",
        email: "sutrotower@salesforce.com",
        price: "3200",
        bedrooms: 1,
        bathrooms: 1,
        pets: "yes",
        user_id: user.id
    }
]

apartments.each do |attr|
    Apartment.create attr
    puts "creating apartment: #{attr}"
  end