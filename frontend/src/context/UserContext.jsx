import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  // 1. Visited Places
  const [visitedPlaces, setVisitedPlaces] = useState(() => {
    try {
      const saved = localStorage.getItem('tripora_visited');
      return saved ? JSON.parse(saved) : [
        {
          id: 'munnar',
          name: 'MUNNAR',
          state: 'Kerala',
          image: '/images/destinations/munnar.jpg',
          dateVisited: 'Aug 2026'
        }
      ];
    } catch {
      return [];
    }
  });

  // 2. Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('tripora_wishlist');
      return saved ? JSON.parse(saved) : [
        {
          id: 'hampi',
          name: 'HAMPI',
          state: 'Karnataka',
          tagline: 'Wander among ancient stone empires and boulder hills.',
          image: '/images/destinations/hampi.jpg',
          matchScore: 92
        },
        {
          id: 'pondicherry',
          name: 'PONDICHERRY',
          state: 'Puducherry',
          tagline: 'French Quarter bougainvillea, beaches & Matrimandir.',
          image: '/images/destinations/pondicherry-auroville.jpg',
          matchScore: 88
        }
      ];
    } catch {
      return [];
    }
  });

  // 3. Planned Trips
  const [plannedTrips, setPlannedTrips] = useState(() => {
    try {
      const saved = localStorage.getItem('tripora_trips');
      return saved ? JSON.parse(saved) : [
        {
          id: 'trip_1',
          destId: 'rishikesh',
          name: 'RISHIKESH',
          state: 'Uttarakhand',
          image: '/images/destinations/rishikesh.jpg',
          duration: 3,
          budget: 4800,
          vibes: ['Spiritual', 'Adventure'],
          status: 'Upcoming', // 'Planning' | 'Upcoming' | 'Completed'
          dateCreated: '2026-08-21'
        }
      ];
    } catch {
      return [];
    }
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tripora_visited', JSON.stringify(visitedPlaces));
    } catch (e) {
      console.error(e);
    }
  }, [visitedPlaces]);

  useEffect(() => {
    try {
      localStorage.setItem('tripora_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('tripora_trips', JSON.stringify(plannedTrips));
    } catch (e) {
      console.error(e);
    }
  }, [plannedTrips]);

  // Helpers
  const isVisited = (destId) => {
    return visitedPlaces.some((item) => item.id === destId);
  };

  const toggleVisited = (dest) => {
    setVisitedPlaces((prev) => {
      const exists = prev.some((item) => item.id === dest.id);
      if (exists) {
        return prev.filter((item) => item.id !== dest.id);
      } else {
        return [
          ...prev,
          {
            id: dest.id,
            name: dest.name,
            state: dest.state,
            image: dest.image,
            dateVisited: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
          }
        ];
      }
    });
  };

  const isWishlisted = (destId) => {
    return wishlist.some((item) => item.id === destId);
  };

  const toggleWishlist = (dest) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === dest.id);
      if (exists) {
        return prev.filter((item) => item.id !== dest.id);
      } else {
        return [
          ...prev,
          {
            id: dest.id,
            name: dest.name,
            state: dest.state,
            tagline: dest.tagline,
            image: dest.image,
            matchScore: dest.matchScore || 90
          }
        ];
      }
    });
  };

  const addPlannedTrip = (dest, duration, budget, vibes) => {
    setPlannedTrips((prev) => [
      ...prev.filter((t) => t.destId !== dest.id),
      {
        id: `trip_${Date.now()}`,
        destId: dest.id,
        name: dest.name,
        state: dest.state,
        image: dest.image,
        duration: duration || dest.recommendedDays || 3,
        budget: budget || dest.budgetRaw || 5000,
        vibes: vibes || dest.vibes || dest.tags || [],
        status: 'Planning',
        dateCreated: new Date().toISOString().split('T')[0]
      }
    ]);
  };

  const removePlannedTrip = (tripId) => {
    setPlannedTrips((prev) => prev.filter((t) => t.id !== tripId));
  };

  const updateTripStatus = (tripId, newStatus) => {
    setPlannedTrips((prev) =>
      prev.map((t) => (t.id === tripId ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <UserContext.Provider
      value={{
        visitedPlaces,
        wishlist,
        plannedTrips,
        isVisited,
        toggleVisited,
        isWishlisted,
        toggleWishlist,
        addPlannedTrip,
        removePlannedTrip,
        updateTripStatus
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserSpace() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserSpace must be used within a UserProvider');
  }
  return context;
}
