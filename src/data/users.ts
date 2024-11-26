export type AccountStatus = 'Active' | 'Suspended' | 'None';

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  personnr: string;
  source: 'Fogis' | 'App';
  avatar: string;
  account: AccountStatus;
}

export const users: User[] = [
  {
    id: '1',
    name: 'Anders Persson',
    email: 'anders.persson@gmail.com',
    mobile: '+46 70 123 4567',
    personnr: '19750113-2877',
    source: 'Fogis',
    avatar: '/images/avatars/AndersPersson.jpg',
    account: 'Active'
  },
  {
    id: '2',
    name: 'Anna Johansson',
    email: 'anna.johansson@hotmail.com',
    mobile: '+46 73 234 5678',
    personnr: '19820524-1234',
    source: 'App',
    avatar: '/images/avatars/AnnaJohansson.jpg',
    account: 'Suspended'
  },
  {
    id: '3',
    name: 'Elin Larsson',
    email: 'elin.larsson@gmail.com',
    mobile: '+46 76 345 6789',
    personnr: '19910807-5678',
    source: 'Fogis',
    avatar: '/images/avatars/ElinLarsson.jpg',
    account: 'None'
  },
  {
    id: '4',
    name: 'Emma Karlsson',
    email: 'emma.karlsson@outlook.com',
    mobile: '+46 72 456 7890',
    personnr: '19881215-9012',
    source: 'App',
    avatar: '/images/avatars/EmmaKarlsson.jpg',
    account: 'Active'
  },
  {
    id: '5',
    name: 'Erik Svensson',
    email: 'erik.svensson@gmail.com',
    mobile: '+46 70 567 8901',
    personnr: '19930302-3456',
    source: 'Fogis',
    avatar: '/images/avatars/ErikSvensson.jpg',
    account: 'Active'
  },
  {
    id: '6',
    name: 'Fredrik Olsson',
    email: 'fredrik.olsson@hotmail.com',
    mobile: '+46 73 678 9012',
    personnr: '19840419-7890',
    source: 'App',
    avatar: '/images/avatars/FredrikOlsson.jpg',
    account: 'Active'
  },
  {
    id: '7',
    name: 'Johan Andersson',
    email: 'johan.andersson@gmail.com',
    mobile: '+46 76 789 0123',
    personnr: '19790630-2345',
    source: 'Fogis',
    avatar: '/images/avatars/JohanAndersson.jpg',
    account: 'Active'
  },
  {
    id: '8',
    name: 'Lars Nilsson',
    email: 'lars.nilsson@outlook.com',
    mobile: '+46 72 890 1234',
    personnr: '19861108-6789',
    source: 'App',
    avatar: '/images/avatars/LarsNilsson.jpg',
    account: 'Suspended'
  },
  {
    id: '9',
    name: 'Sara Bergström',
    email: 'sara.bergstrom@gmail.com',
    mobile: '+46 70 901 2345',
    personnr: '19940725-1234',
    source: 'Fogis',
    avatar: '/images/avatars/SaraBergstrom.jpg',
    account: 'None'
  },
  {
    id: '10',
    name: 'Sofie Eriksson',
    email: 'sofie.eriksson@hotmail.com',
    mobile: '+46 73 012 3456',
    personnr: '19900913-5678',
    source: 'App',
    avatar: '/images/avatars/SofieEriksson.jpg',
    account: 'Active'
  }
];
