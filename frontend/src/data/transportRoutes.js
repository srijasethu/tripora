export const TRANSPORT_ROUTES = [
  {
    id: 'erode-munnar',
    title: 'Coimbatore to Munnar Escape',
    totalTime: '6h 15m',
    totalCost: '₹540/person',
    carbonFootprint: '-42% vs cab',
    steps: [
      { location: 'ERODE JN', mode: 'train', modeName: 'Express Train (2S)', icon: 'Train', duration: '2h 10m', fare: '₹140', detail: 'Train #12677 Intercity' },
      { location: 'COIMBATORE CENTRAL', mode: 'bus', modeName: 'KSRTC Airavat / TNSTC', icon: 'Bus', duration: '3h 30m', fare: '₹320', detail: 'Scenic Western Ghats Climb' },
      { location: 'MUNNAR BUS STAND', mode: 'auto', modeName: 'Local Shared Auto', icon: 'Car', duration: '35m', fare: '₹80', detail: 'Tea Garden Winding Road' },
      { location: 'YOUR HILL STAY', mode: 'stay', modeName: 'Homestay Check-in', icon: 'MapPin', duration: 'Arrived', fare: 'Free', detail: 'Hot Chai Welcome' }
    ]
  },
  {
    id: 'chennai-kodaikanal',
    title: 'Chennai to Kodaikanal Overnighter',
    totalTime: '8h 45m',
    totalCost: '₹890/person',
    carbonFootprint: '-60% vs solo car',
    steps: [
      { location: 'CHENNAI EGMORE', mode: 'train', modeName: 'Pandian Express (3AC)', icon: 'Train', duration: '7h 15m', fare: '₹680', detail: 'Overnight Sleeper' },
      { location: 'KODAI ROAD STN', mode: 'bus', modeName: 'Mountain Bus', icon: 'Bus', duration: '1h 15m', fare: '₹150', detail: 'Ghat Bend Route' },
      { location: 'KODAI TOWN', mode: 'auto', modeName: 'Auto Rickshaw', icon: 'Car', duration: '15m', fare: '₹60', detail: 'Lake Side Drop' },
      { location: 'PINE VALLEY COTTAGES', mode: 'stay', modeName: 'Check-in', icon: 'MapPin', duration: 'Arrived', fare: 'Free', detail: 'Fireplace Ready' }
    ]
  },
  {
    id: 'bengaluru-coorg',
    title: 'Bengaluru to Coorg Estate Drive',
    totalTime: '5h 30m',
    totalCost: '₹620/person',
    carbonFootprint: '-35% efficient',
    steps: [
      { location: 'BENGALURU (SATELLITE)', mode: 'bus', modeName: 'KSRTC Electric Bus', icon: 'Bus', duration: '4h 30m', fare: '₹510', detail: 'Expressway Route' },
      { location: 'MADIKERI BUS STAND', mode: 'cab', modeName: 'Shared Estate Jeep', icon: 'Car', duration: '45m', fare: '₹110', detail: 'Coffee Trail Climb' },
      { location: 'COFFEE ESTATE HOMESTAY', mode: 'stay', modeName: 'Arrival', icon: 'MapPin', duration: 'Arrived', fare: 'Free', detail: 'Fresh Filter Coffee' }
    ]
  }
];
