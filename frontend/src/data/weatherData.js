export const WEATHER_DESTINATIONS = [
  {
    id: 'munnar',
    name: 'Munnar',
    state: 'Kerala',
    category: 'Hill Stations',
    currentTemp: 17,
    feelsLike: 16,
    condition: 'Misty & Pleasant',
    iconType: 'cloud-fog',
    rainfallProb: '25%',
    humidity: '78%',
    windSpeed: '12 km/h',
    uvIndex: 4,
    aqi: 22,
    aqiStatus: 'Good',
    packingTip: 'Light fleece jacket, rain windcheater, walking shoes',
    bestTimeOfDay: 'Early mornings (6:00 AM - 10:30 AM) for tea garden mist views',
    advisory: 'Early morning valley fog can slow down ghat driving; keep fog lights on.',
    fiveDayForecast: [
      { day: 'Mon', temp: 18, low: 13, condition: 'Misty', icon: 'cloud-fog' },
      { day: 'Tue', temp: 17, low: 12, condition: 'Scattered Showers', icon: 'cloud-rain' },
      { day: 'Wed', temp: 19, low: 14, condition: 'Partly Cloudy', icon: 'cloud-sun' },
      { day: 'Thu', temp: 20, low: 14, condition: 'Sunny Breaks', icon: 'sun' },
      { day: 'Fri', temp: 18, low: 13, condition: 'Cool Breeze', icon: 'wind' }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    category: 'Coastal & Beaches',
    currentTemp: 29,
    feelsLike: 32,
    condition: 'Sunny Coastal Breeze',
    iconType: 'sun',
    rainfallProb: '10%',
    humidity: '68%',
    windSpeed: '18 km/h',
    uvIndex: 8,
    aqi: 35,
    aqiStatus: 'Good',
    packingTip: 'Breathable linen clothes, sunscreen SPF 50+, sunglasses',
    bestTimeOfDay: 'Late afternoon (4:30 PM - 7:00 PM) for beach sunsets',
    advisory: 'Moderate sea swells; observe red flags at active swimming beaches.',
    fiveDayForecast: [
      { day: 'Mon', temp: 30, low: 24, condition: 'Sunny', icon: 'sun' },
      { day: 'Tue', temp: 29, low: 24, condition: 'Clear Sky', icon: 'sun' },
      { day: 'Wed', temp: 30, low: 25, condition: 'Breezy', icon: 'wind' },
      { day: 'Thu', temp: 28, low: 23, condition: 'Passing Cloud', icon: 'cloud-sun' },
      { day: 'Fri', temp: 29, low: 24, condition: 'Sunny', icon: 'sun' }
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    category: 'Heritage & Plains',
    currentTemp: 26,
    feelsLike: 25,
    condition: 'Pleasant & Crisp',
    iconType: 'sun',
    rainfallProb: '0%',
    humidity: '42%',
    windSpeed: '10 km/h',
    uvIndex: 6,
    aqi: 88,
    aqiStatus: 'Moderate',
    packingTip: 'Cotton daywear, light shawl for evening rooftop dinners',
    bestTimeOfDay: 'Morning (8:30 AM - 12:00 PM) to explore forts before midday heat',
    advisory: 'Dry desert air; keep water bottles handy while ascending Amer Fort.',
    fiveDayForecast: [
      { day: 'Mon', temp: 27, low: 18, condition: 'Sunny', icon: 'sun' },
      { day: 'Tue', temp: 26, low: 17, condition: 'Clear', icon: 'sun' },
      { day: 'Wed', temp: 25, low: 16, condition: 'Pleasant', icon: 'cloud-sun' },
      { day: 'Thu', temp: 26, low: 17, condition: 'Crisp', icon: 'sun' },
      { day: 'Fri', temp: 27, low: 18, condition: 'Sunny', icon: 'sun' }
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    category: 'Hill Stations',
    currentTemp: 14,
    feelsLike: 13,
    condition: 'Chilly Alpine Skies',
    iconType: 'cloud-sun',
    rainfallProb: '15%',
    humidity: '55%',
    windSpeed: '14 km/h',
    uvIndex: 5,
    aqi: 18,
    aqiStatus: 'Good',
    packingTip: 'Thermal layer, wool sweater, sturdy hiking boots',
    bestTimeOfDay: 'Midday (11:00 AM - 3:00 PM) for Solang Valley adventure sports',
    advisory: 'Rohtang/Atal Tunnel pass temperatures drop below 6°C towards sunset.',
    fiveDayForecast: [
      { day: 'Mon', temp: 15, low: 7, condition: 'Partly Cloudy', icon: 'cloud-sun' },
      { day: 'Tue', temp: 13, low: 6, condition: 'Crisp Sun', icon: 'sun' },
      { day: 'Wed', temp: 14, low: 8, condition: 'Cloudy', icon: 'cloud' },
      { day: 'Thu', temp: 12, low: 5, condition: 'Rain/Hail Chills', icon: 'cloud-rain' },
      { day: 'Fri', temp: 13, low: 6, condition: 'Clear Sky', icon: 'sun' }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh (Leh)',
    state: 'Ladakh',
    category: 'High Altitude',
    currentTemp: 9,
    feelsLike: 6,
    condition: 'Dry High-Altitude Sun',
    iconType: 'sun',
    rainfallProb: '5%',
    humidity: '28%',
    windSpeed: '22 km/h',
    uvIndex: 9,
    aqi: 12,
    aqiStatus: 'Excellent',
    packingTip: 'Heavy down jacket, UV400 sunglasses, lip balm, hydration tablets',
    bestTimeOfDay: '10:00 AM - 4:00 PM for high-pass drives (Khardung La / Chang La)',
    advisory: 'High altitude UV radiation is intense; hydrate continuously and rest on Day 1.',
    fiveDayForecast: [
      { day: 'Mon', temp: 10, low: -1, condition: 'Sunny & Crisp', icon: 'sun' },
      { day: 'Tue', temp: 9, low: -2, condition: 'High Wind', icon: 'wind' },
      { day: 'Wed', temp: 8, low: -3, condition: 'Clear Sky', icon: 'sun' },
      { day: 'Thu', temp: 10, low: -1, condition: 'Sunny', icon: 'sun' },
      { day: 'Fri', temp: 7, low: -4, condition: 'Freezing Breeze', icon: 'wind' }
    ]
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    category: 'Hill Stations',
    currentTemp: 21,
    feelsLike: 20,
    condition: 'Clear River Breeze',
    iconType: 'cloud-sun',
    rainfallProb: '5%',
    humidity: '52%',
    windSpeed: '9 km/h',
    uvIndex: 5,
    aqi: 45,
    aqiStatus: 'Good',
    packingTip: 'Quick-dry activewear for river rafting, comfy evening sandals',
    bestTimeOfDay: 'Sunset (5:00 PM - 6:30 PM) for cool Triveni Ghat Aarti breeze',
    advisory: 'Ganges water temperature is currently 16°C; rafting suits recommended.',
    fiveDayForecast: [
      { day: 'Mon', temp: 22, low: 14, condition: 'Sunny', icon: 'sun' },
      { day: 'Tue', temp: 21, low: 13, condition: 'Clear', icon: 'sun' },
      { day: 'Wed', temp: 23, low: 14, condition: 'Mild Sun', icon: 'cloud-sun' },
      { day: 'Thu', temp: 22, low: 13, condition: 'Pleasant', icon: 'sun' },
      { day: 'Fri', temp: 20, low: 12, condition: 'Cool Breeze', icon: 'wind' }
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    category: 'Heritage & Plains',
    currentTemp: 25,
    feelsLike: 26,
    condition: 'Mild Autumn Sun',
    iconType: 'sun',
    rainfallProb: '0%',
    humidity: '58%',
    windSpeed: '8 km/h',
    uvIndex: 5,
    aqi: 95,
    aqiStatus: 'Moderate',
    packingTip: 'Modest lightweight clothing, comfortable walking sneakers for ghat alleys',
    bestTimeOfDay: 'Sunrise (5:45 AM - 7:30 AM) for golden hour Ganges boat rides',
    advisory: 'Morning river mist clears around 7:15 AM; ideal photography light follows immediately.',
    fiveDayForecast: [
      { day: 'Mon', temp: 26, low: 19, condition: 'Sunny', icon: 'sun' },
      { day: 'Tue', temp: 25, low: 18, condition: 'Hazy Morning', icon: 'cloud-fog' },
      { day: 'Wed', temp: 26, low: 19, condition: 'Clear', icon: 'sun' },
      { day: 'Thu', temp: 27, low: 19, condition: 'Sunny', icon: 'sun' },
      { day: 'Fri', temp: 25, low: 18, condition: 'Pleasant', icon: 'cloud-sun' }
    ]
  },
  {
    id: 'meghalaya',
    name: 'Cherrapunji & Shillong',
    state: 'Meghalaya',
    category: 'Hill Stations',
    currentTemp: 18,
    feelsLike: 17,
    condition: 'Passing Rain & Fog',
    iconType: 'cloud-rain',
    rainfallProb: '45%',
    humidity: '84%',
    windSpeed: '16 km/h',
    uvIndex: 4,
    aqi: 15,
    aqiStatus: 'Excellent',
    packingTip: 'Waterproof trekking shoes, quick-dry rain jacket, waterproof phone pouch',
    bestTimeOfDay: 'Morning (7:30 AM - 11:30 AM) before afternoon cloud banks roll over waterfalls',
    advisory: 'Living root bridge stone steps are damp and slippery; use trekking poles with rubber tips.',
    fiveDayForecast: [
      { day: 'Mon', temp: 18, low: 12, condition: 'Rain Showers', icon: 'cloud-rain' },
      { day: 'Tue', temp: 19, low: 13, condition: 'Cloudy', icon: 'cloud' },
      { day: 'Wed', temp: 17, low: 11, condition: 'Dense Fog', icon: 'cloud-fog' },
      { day: 'Thu', temp: 20, low: 13, condition: 'Sunny Window', icon: 'cloud-sun' },
      { day: 'Fri', temp: 18, low: 12, condition: 'Scattered Rain', icon: 'cloud-rain' }
    ]
  },
  {
    id: 'alleppey',
    name: 'Alleppey (Alappuzha)',
    state: 'Kerala',
    category: 'Coastal & Beaches',
    currentTemp: 28,
    feelsLike: 31,
    condition: 'Tropical Backwater Calm',
    iconType: 'cloud-sun',
    rainfallProb: '20%',
    humidity: '76%',
    windSpeed: '11 km/h',
    uvIndex: 7,
    aqi: 28,
    aqiStatus: 'Good',
    packingTip: 'Light cotton shorts, sun hats, insect repellent for evening waterways',
    bestTimeOfDay: 'Midday to sunset (12:00 PM - 5:30 PM) for tranquil houseboat cruising',
    advisory: 'Occasional brief 20-minute passing tropical showers enhance backwater greenery.',
    fiveDayForecast: [
      { day: 'Mon', temp: 29, low: 23, condition: 'Partly Sunny', icon: 'cloud-sun' },
      { day: 'Tue', temp: 28, low: 23, condition: 'Passing Shower', icon: 'cloud-rain' },
      { day: 'Wed', temp: 29, low: 24, condition: 'Warm Breeze', icon: 'sun' },
      { day: 'Thu', temp: 28, low: 23, condition: 'Overcast Calm', icon: 'cloud' },
      { day: 'Fri', temp: 29, low: 24, condition: 'Tropical Sun', icon: 'sun' }
    ]
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    category: 'Heritage & Plains',
    currentTemp: 27,
    feelsLike: 27,
    condition: 'Dry Granite Sunshine',
    iconType: 'sun',
    rainfallProb: '0%',
    humidity: '48%',
    windSpeed: '13 km/h',
    uvIndex: 7,
    aqi: 32,
    aqiStatus: 'Good',
    packingTip: 'Wide-brim hat, cushioned walking shoes, electrolytes for boulder walks',
    bestTimeOfDay: 'Early morning (6:30 AM - 9:30 AM) & sunset (5:15 PM - 6:30 PM)',
    advisory: 'Granite boulders retain daytime heat; avoid climbing hills between 12:30 PM and 3:30 PM.',
    fiveDayForecast: [
      { day: 'Mon', temp: 28, low: 18, condition: 'Sunny', icon: 'sun' },
      { day: 'Tue', temp: 27, low: 17, condition: 'Clear', icon: 'sun' },
      { day: 'Wed', temp: 28, low: 18, condition: 'Warm Sun', icon: 'sun' },
      { day: 'Thu', temp: 27, low: 17, condition: 'Breezy', icon: 'wind' },
      { day: 'Fri', temp: 29, low: 19, condition: 'Sunny', icon: 'sun' }
    ]
  }
];

export const WEATHER_CATEGORIES = [
  'All',
  'Hill Stations',
  'Coastal & Beaches',
  'Heritage & Plains',
  'High Altitude'
];

/**
 * Converts temperature from Celsius to desired unit ('C' or 'F').
 */
export function convertTemp(celsius, unit = 'C') {
  if (unit === 'F') {
    return Math.round((celsius * 9) / 5 + 32);
  }
  return Math.round(celsius);
}
