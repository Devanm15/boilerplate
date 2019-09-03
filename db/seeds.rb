# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Cultures.destroy_all

Culture.create!([{ 
    name: 'Inuit', 
    description: 'Still collecting resources at this time.' 
},
{
    name:"Navajo",
    description: "Still collecting resources at this time."
},
{
    name:"Celtic",  
    description: "Still collecting resources at this time."
},
{
    name:"Saami", 
    description: "Still collecting resources at this time."
},
{
    name:"Pigmy", 
    description: "Still collecting resources at this time."
}])

Location.create!([{ 
    latitude:66.616223,
    longitude:-94.641224
},
{ 
    latitude:35.889202,
    longitude:-109.637477
},
{ 
    latitude:54.084000,
    longitude:-2.620073
    
},
{ 
    latitude:69.956541,
    longitude:25.190607
},
{ 
    latitude:-1.734690,
    longitude:16.304982
}])
    p "Created #{Culture.count} cultures"
    p "Created #{Location.count} cultures"
    
