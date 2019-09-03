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

    p "Created #{Culture.count} cultures"
# Culture.create(name:"Navajo"  description: "Still collecting resources at this time.")
# Culture.create(name:"Celtic"  description: "Still collecting resources at this time.")
# Culture.create(name:"Celtic"  description: "Still collecting resources at this time.")
# Culture.create(name:"Saami" description: "Still collecting resources at this time.")
# Culture.create(name:"Pigmy" description: "Still collecting resources at this time.")