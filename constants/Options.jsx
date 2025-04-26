export const SelectTravellerList=[
  {
      title:'Just Me',
      desc:'I want to explore the world by myself',
      icon:'🤙',
      people:'1'

  },
  {
      title:'Couple',
      desc: 'We want to experience the world together, hand in hand.',
      icon: '💗',
      people: '2'

  },
  {
      title:'Family',
      desc: 'We want to create lasting memories and explore the world as a family.',
      icon: '👨‍👩‍👧',
      people: '3 - 5'
  },
  {
      title: 'Friends',
      desc: 'We want to explore the world, making unforgettable memories with the best of friends.',
      icon: '🤼',
      people: '5 - 10' 
  }
  
]


export const AI_PROMPT="Generate Travel plan for location : {location}, for {days} days {budget} with flight details, flight price with booking url, hotels options list with hotelname, hotel address, price , hotel image url, geo coordinates, rating description, and places to visit nearby with place name, place details, place image url, geo coordinates, ticket pricing , time and travel of each of the location with each day plan with best time to visit in valid json and don't add any comments , and verify the correct format of json, don't add comma if the you are not going add next item"

export const places = [
{
  name: 'Eiffel Tower',
  location: 'Paris, France',
  image: 'https://images.unsplash.com/photo-1730993175478-b634849f6536?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'An iconic symbol of Paris, known for its unique design and breathtaking views of the city.',
  thingsToDo: [
    'Take an elevator to the top for panoramic views',
    'Enjoy a picnic at Champ de Mars',
    'Cruise on the Seine River nearby'
  ]
},
{
  name: 'Great Wall of China',
  location: 'China',
  image: 'https://images.unsplash.com/photo-1608037521244-f1c6c7635194?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'A world-famous ancient wall that stretches over 13,000 miles, offering a glimpse into China\'s rich history.',
  thingsToDo: [
    'Hike the Mutianyu or Jinshanling sections',
    'Visit nearby Ming Tombs',
    'Take a toboggan ride down the wall'
  ]
},
{
  name: 'Machu Picchu',
  location: 'Peru',
  image: 'https://images.unsplash.com/photo-1543385426-191664295b58?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'An ancient Incan city set high in the Andes Mountains, famous for its stunning architecture and panoramic views.',
  thingsToDo: [
    'Hike the Inca Trail',
    'Explore the Sacred Valley',
    'Visit the town of Aguas Calientes'
  ]
},
{
  name: 'Colosseum',
  location: 'Rome, Italy',
  image: 'https://plus.unsplash.com/premium_photo-1675975635390-6ca4d5c056b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'A historic amphitheater in the heart of Rome, known for its ancient gladiator battles and stunning architecture.',
  thingsToDo: [
    'Take a guided tour of the Colosseum and Roman Forum',
    'Toss a coin in Trevi Fountain',
    'Explore Vatican City nearby'
  ]
},
{
  name: 'Taj Mahal',
  location: 'Agra, India',
  image: 'https://plus.unsplash.com/premium_photo-1697729636512-61ef6695d115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'A beautiful white marble mausoleum and one of the Seven Wonders of the World, built in memory of Mumtaz Mahal.',
  thingsToDo: [
    'Visit Agra Fort',
    'Explore Mehtab Bagh for sunset views',
    'Try local Mughlai cuisine'
  ]
},
{
  name: 'Santorini',
  location: 'Greece',
  image: 'https://plus.unsplash.com/premium_photo-1661963643348-e95c6387ee8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'Known for its stunning white-and-blue architecture, beautiful sunsets, and crystal-clear waters.',
  thingsToDo: [
    'Watch the sunset in Oia',
    'Take a boat tour of the caldera',
    'Visit the black sand beach in Kamari'
  ]
},
{
  name: 'Sydney Opera House',
  location: 'Sydney, Australia',
  image: 'https://plus.unsplash.com/premium_photo-1697730221799-f2aa87ab2c5d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'An iconic performing arts center in Sydney, famous for its unique architecture and location by the harbor.',
  thingsToDo: [
    'Catch a live performance',
    'Walk along the Sydney Harbour Bridge',
    'Relax at Bondi Beach'
  ]
},
{
  name: 'Grand Canyon',
  location: 'Arizona, USA',
  image: 'https://plus.unsplash.com/premium_photo-1675826774820-5fa779f5256a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'A massive natural canyon carved by the Colorado River, known for its immense size and colorful rock formations.',
  thingsToDo: [
    'Hike the Bright Angel Trail',
    'Take a helicopter tour',
    'Watch sunrise or sunset at Desert View'
  ]
},
{
  name: 'Mount Fuji',
  location: 'Japan',
  image: 'https://plus.unsplash.com/premium_photo-1661882926003-91a51e3dfe64?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'An iconic, snow-capped volcano and the highest mountain in Japan, offering stunning views and hiking opportunities.',
  thingsToDo: [
    'Climb the mountain during summer season',
    'Visit the Fuji Five Lakes region',
    'Relax in a traditional onsen with mountain views'
  ]
},
{
  name: 'Christ the Redeemer',
  location: 'Rio de Janeiro, Brazil',
  image: 'https://images.unsplash.com/photo-1715529137314-eddb65d1fcb1?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: 'A massive statue of Jesus Christ standing atop Mount Corcovado in Rio de Janeiro, symbolizing peace and unity.',
  thingsToDo: [
    'Ride the Corcovado Train to the statue',
    'Explore Sugarloaf Mountain',
    'Relax on Copacabana Beach'
  ]
}
];
