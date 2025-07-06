export const Friends = [
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "AJ",
      isOnline: true
    },
    {
      id: 2,
      name: "Bob Smith",
      avatar: "BS",
      isOnline: false,
      lastSeen: new Date(Date.now() - 30 * 60 * 1000)
    },
    {
      id: 3,
      name: "Charlie Brown",
      avatar: "CB",
      isOnline: true
    },
    {
      id: 4,
      name: "Diana Prince",
      avatar: "DP",
      isOnline: false,
      lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      id: 5,
      name: "Eve Wilson",
      avatar: "EW",
      isOnline: true
    }
  ]

export const Messages = {
    1: [
      {
        id: 1,
        text: "Hey! How are you doing?",
        timestamp: new Date(Date.now() - 20 * 60 * 1000),
        sender: 'friend' as 'friend' | 'user'
      },
      {
        id: 2,
        text: "I'm good! Just working on some projects. What about you?",
        timestamp: new Date(Date.now() - 18 * 60 * 1000),
        sender: 'user' as 'friend' | 'user'
      },
      {
        id: 3,
        text: "Same here! Working on a new React app. It's pretty exciting!",
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        sender: 'friend' as 'friend' | 'user'
      }
    ],
    2: [
      {
        id: 1,
        text: "Did you see the game last night?",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        sender: 'friend' as 'friend' | 'user'
      },
      {
        id: 2,
        text: "Yes! What a match! Can't believe that final goal.",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 + 5 * 60 * 1000),
        sender: 'user' as 'friend' | 'user'
      }
    ],
    3: [
      {
        id: 1,
        text: "Want to grab coffee later?",
        timestamp: new Date(Date.now() - 60 * 60 * 1000),
        sender: 'friend' as 'friend' | 'user'
      }
    ],
    4: [],
    5: [
      {
        id: 1,
        text: "Happy birthday! 🎉",
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
        sender: 'user' as 'friend' | 'user'
      },
      {
        id: 2,
        text: "Thank you so much! 😊",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        sender: 'friend' as 'friend' | 'user'
      }
    ]
  }