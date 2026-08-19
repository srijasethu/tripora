export const INITIAL_ITINERARY = {
  title: 'YOUR MUNNAR WEEKEND',
  originalDays: [
    {
      day: 'DAY 01',
      subtitle: 'Arrival & Top Station Trek',
      status: 'warning',
      activities: ['Coimbatore Bus → Munnar (3.5h)', 'Check-in at Homestay', 'Drive to Top Station (2.5h)', 'Sunset at Echo Point'],
      issues: ['Tight transit window between bus & trek']
    },
    {
      day: 'DAY 02',
      subtitle: 'Waterfalls, Tea Factory & Lake Kayaking',
      status: 'alert',
      activities: ['Lakkam Waterfalls', 'Kolukkumalai Jeep Safari (4h travel)', 'Mattupetty Dam Speedboat', 'Tea Museum'],
      issues: ['6h 45m travelling on Day 2', 'Heavy rain expected 2 PM - 6 PM']
    },
    {
      day: 'DAY 03',
      subtitle: 'Marayoor Sandalwood & Return',
      status: 'warning',
      activities: ['Drive to Marayoor Dolmens (3h)', 'Local Spice Market Shopping', 'Return Bus to Coimbatore'],
      issues: ['You\'re ₹1,420 over budget', 'High crowd levels Sunday afternoon']
    }
  ],
  warnings: [
    { id: 'w1', text: '6h 45m travelling on Day 2', type: 'travel' },
    { id: 'w2', text: 'Heavy rain expected Saturday afternoon', type: 'weather' },
    { id: 'w3', text: 'You\'re ₹1,420 over budget', type: 'budget' },
    { id: 'w4', text: 'High crowd levels Sunday at Mattupetty', type: 'crowd' }
  ]
};

export const OPTIMIZED_ITINERARY = {
  title: 'OPTIMIZED MUNNAR ESCAPE (REALITY ENGINE APPROVED)',
  optimizedDays: [
    {
      day: 'DAY 01',
      subtitle: 'Smooth Arrival & Old Munnar Vibe',
      status: 'success',
      activities: ['Scenic Morning Bus Arrival', 'Check-in & Fresh Filter Coffee', 'Local Tea Museum & Pothamedu Sunset View'],
      savings: 'Travel time reduced by 1h 40m'
    },
    {
      day: 'DAY 02',
      subtitle: 'Sunrise Sunrise Jeep & Indoor Spice Workshop',
      status: 'success',
      activities: ['5:00 AM Kolukkumalai Sunrise (Misses Rain)', 'Cozy Hill Cafe Lunch', 'Rain-Safe Indoor Spice Tasting Session'],
      savings: 'Rain risk eliminated • 2h 10m total transit'
    },
    {
      day: 'DAY 03',
      subtitle: 'Off-Peak Waterfall & Smart Budget Return',
      status: 'success',
      activities: ['Early Morning Lakkam Waterfall (Zero Crowd)', 'Shared Local KSRTC Express Return'],
      savings: 'Budget saved: ₹1,580 (Under budget!)'
    }
  ],
  resolved: [
    { id: 'r1', text: 'Travel time optimized from 6h 45m → 2h 10m', type: 'travel' },
    { id: 'r2', text: 'Outdoor slots rescheduled before monsoon rain window', type: 'weather' },
    { id: 'r3', text: 'Budget brought ₹160 UNDER target ₹5,800', type: 'budget' },
    { id: 'r4', text: 'Off-peak early slots bypass Sunday tourist queues', type: 'crowd' }
  ]
};
