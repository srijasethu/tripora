export const DETOUR_LOCATIONS = [
  {
    id: 'fort-kochi',
    name: 'Fort Kochi',
    state: 'Kerala',
    timeAvailable: '02 : 15 : 00',
    detours: {
      Chill: [
        { name: 'Kashi Art Café', duration: '4 min walk', desc: 'Courtyard iced coffee & local art installation', price: '₹220' },
        { name: 'Princess Street Stroll', duration: '7 min walk', desc: 'Colonial heritage architecture & yellow walls', price: 'Free' },
        { name: 'Chinese Fishing Nets Sunset', duration: '12 min walk', desc: 'Watch traditional wooden cantilever nets at dusk', price: 'Free' }
      ],
      Eat: [
        { name: 'Seagull Restaurant Waterfront', duration: '6 min walk', desc: 'Fresh Malabar fish curry by the harbour', price: '₹450' },
        { name: 'Loafer\'s Corner Bakery', duration: '3 min walk', desc: 'Fresh banana cake & spiced cardamom tea', price: '₹140' },
        { name: 'Vasco Da Gama Square Stalls', duration: '9 min walk', desc: 'Street fried squid & coconut water', price: '₹180' }
      ],
      Explore: [
        { name: 'Mattancherry Spice Market', duration: '15 min auto', desc: 'Smell sacks of ginger, turmeric & pepper', price: '₹60' },
        { name: 'Paradesi Synagogue Alley', duration: '12 min auto', desc: 'Hand-painted Chinese floor tiles & antique shops', price: '₹20' },
        { name: 'Street Murals Trail', duration: 'Self-guided', desc: 'Kochi-Muziris Biennale street art walls', price: 'Free' }
      ],
      Shop: [
        { name: 'Jew Town Antiques', duration: '10 min auto', desc: 'Vintage brass lamps & carved wooden chests', price: 'Browsing' },
        { name: 'Cinnamon Boutique', duration: '5 min walk', desc: 'Handloom cotton apparel & indigo prints', price: '₹800+' }
      ]
    }
  },
  {
    id: 'old-delhi',
    name: 'Old Delhi / Chandni Chowk',
    state: 'Delhi',
    timeAvailable: '01 : 45 : 00',
    detours: {
      Chill: [
        { name: 'Khari Baoli Spice Roof', duration: '8 min walk', desc: 'Panoramas over Asia\'s largest wholesale spice market', price: 'Free' },
        { name: 'Gurudwara Sis Ganj Sahib', duration: '4 min walk', desc: 'Peaceful community courtyard & spiritual refuge', price: 'Free' }
      ],
      Eat: [
        { name: 'Old Famous Jalebi Wala', duration: '3 min walk', desc: 'Piping hot pure ghee jalebis since 1884', price: '₹120' },
        { name: 'Natraj Dahi Bhalle', duration: '5 min walk', desc: 'Melts-in-your-mouth spiced yogurt dumplings', price: '₹90' }
      ],
      Explore: [
        { name: 'Jama Masjid Minaret Climb', duration: '10 min walk', desc: 'Ascend 130 red sandstone steps for Delhi skyline view', price: '₹100' },
        { name: 'Ballimaran Ghalib Haveli', duration: '12 min walk', desc: 'Step into Urdu poet Mirza Ghalib\'s 19th century home', price: 'Free' }
      ],
      Shop: [
        { name: 'Kinari Bazaar Trimmings', duration: '6 min walk', desc: 'Laces, embroidery zardosi & festive sparkle', price: '₹100+' }
      ]
    }
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry White Town',
    state: 'Puducherry',
    timeAvailable: '02 : 30 : 00',
    detours: {
      Chill: [
        { name: 'Café des Arts', duration: '3 min walk', desc: 'Mustard-yellow French bungalow & garden crêpes', price: '₹280' },
        { name: 'Promenade Beach Walk', duration: '5 min walk', desc: 'Sea breeze alongside the rocky French coastline', price: 'Free' }
      ],
      Eat: [
        { name: 'Baker Street French Bakery', duration: '6 min walk', desc: 'Authentic buttery croissants & baguettes', price: '₹160' },
        { name: 'Coromandel Café', duration: '8 min walk', desc: 'Iced hibiscus tea in a pink heritage villa', price: '₹320' }
      ],
      Explore: [
        { name: 'Sri Aurobindo Ashram', duration: '7 min walk', desc: 'Silent floral courtyard & spiritual meditation', price: 'Free' },
        { name: 'French Quarter Photo Walk', duration: '10 min walk', desc: 'Bougainvillea flowers trailing over colonial gates', price: 'Free' }
      ],
      Shop: [
        { name: 'Cluny Embroidery Centre', duration: '9 min walk', desc: 'Lace tablecloths handcrafted by local women', price: '₹400+' }
      ]
    }
  }
];
