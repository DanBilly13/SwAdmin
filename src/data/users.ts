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

// Helper function to get the correct image path based on environment
const getImagePath = (imageName: string) => {
  // Check if we're in development mode
  const isDev = import.meta.env.DEV;
  const basePath = isDev ? '' : '/SwAdmin';
  return `${basePath}/images/avatars/${imageName}`;
};

export const users: User[] = [
  {
    id: '1',
    name: 'Anders Persson',
    email: 'anders.persson@gmail.com',
    mobile: '+46 70 123 4567',
    personnr: '19750113-2877',
    source: 'Fogis',
    avatar: getImagePath('AndersPersson.jpg'),
    account: 'Active'
  },
  {
    id: '2',
    name: 'Anna Johansson',
    email: 'anna.johansson@hotmail.com',
    mobile: '+46 73 234 5678',
    personnr: '19820524-1234',
    source: 'App',
    avatar: getImagePath('AnnaJohansson.jpg'),
    account: 'Suspended'
  },
  {
    id: '3',
    name: 'Erik Svensson',
    email: 'erik.svensson@yahoo.com',
    mobile: '+46 76 345 6789',
    personnr: '19900807-5678',
    source: 'Fogis',
    avatar: getImagePath('ErikSvensson.jpg'),
    account: 'None'
  },
  {
    id: '4',
    name: 'Emma Karlsson',
    email: 'emma.karlsson@gmail.com',
    mobile: '+46 70 456 7890',
    personnr: '19880215-9012',
    source: 'App',
    avatar: getImagePath('EmmaKarlsson.jpg'),
    account: 'Active'
  },
  {
    id: '5',
    name: 'Lars Nilsson',
    email: 'lars.nilsson@hotmail.com',
    mobile: '+46 73 567 8901',
    personnr: '19770630-3456',
    source: 'Fogis',
    avatar: getImagePath('LarsNilsson.jpg'),
    account: 'Suspended'
  },
  {
    id: '6',
    name: 'Sofia Eriksson',
    email: 'sofia.eriksson@yahoo.com',
    mobile: '+46 76 678 9012',
    personnr: '19950418-7890',
    source: 'App',
    avatar: getImagePath('SofieEriksson.jpg'),
    account: 'Active'
  },
  {
    id: '7',
    name: 'Johan Andersson',
    email: 'johan.andersson@gmail.com',
    mobile: '+46 70 789 0123',
    personnr: '19831102-2345',
    source: 'Fogis',
    avatar: getImagePath('JohanAndersson.jpg'),
    account: 'None'
  },
  {
    id: '8',
    name: 'Sara Bergström',
    email: 'sara.bergstrom@hotmail.com',
    mobile: '+46 73 890 1234',
    personnr: '19910925-6789',
    source: 'App',
    avatar: getImagePath('SaraBergstrom.jpg'),
    account: 'Active'
  },
  {
    id: '9',
    name: 'Fredrik Olsson',
    email: 'fredrik.olsson@yahoo.com',
    mobile: '+46 76 901 2345',
    personnr: '19840307-0123',
    source: 'Fogis',
    avatar: getImagePath('FredrikOlsson.jpg'),
    account: 'Suspended'
  },
  {
    id: '10',
    name: 'Elin Larsson',
    email: 'elin.larsson@gmail.com',
    mobile: '+46 70 012 3456',
    personnr: '19930712-4567',
    source: 'App',
    avatar: getImagePath('ElinLarsson.jpg'),
    account: 'Active'
  }
];
