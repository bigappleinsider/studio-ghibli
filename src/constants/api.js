export const API_ENDPOINT = 'https://ghibliapi.herokuapp.com';
export const CATEGORIES = [
  {
    path: '/people',
    label: 'People'
  },
  {
    path: '/films',
    label: 'Films'
  },
  {
    path: '/locations',
    label: 'Locations'
  },
  {
    path: '/species',
    label: 'Species'
  },
  {
    path: '/vehicles',
    label: 'Vehicles'
  },
];

export const DISPLAY_FIELDS = {
  people: {
		fields: [
			{ name: 'gender', label: 'Gender'},
			{ name: 'age', label: 'Age' },
			{ name: 'eye_color', label: 'Eye Color' },
			{ name: 'hair_color', label: 'Hair color' }
		],
		links: ['films', 'species']
  },
  films: {
		fields: [
			{ name: 'description', label: 'Description', hideLabel: true },
			{ name: 'director', label: 'Director' },
			{ name: 'producer', label: 'Producer' },
			{ name: 'release_date', label: 'Release Date' },
			{ name: 'rt_score', label: 'Rotten Tomatoes Score' }
    ],
    links: []
	},
	locations: {
		fields: [
			{ name: 'climate', label: 'Climate' },
			{ name: 'terrain', label: 'Terrain' },
			{ name: 'surface_water', label: 'Surface Water' }
		],
		links: ['residents', 'films']
	},
	species: {
		fields: [
			{ name: 'eye_colors', label: 'Eye Colors' },
			{ name: 'hair_colors', label: 'Hair Colors' }
		],
		links: ['people', 'films']
	},
	vehicles: {
		fields: [
			{ name: 'description', label: 'Description', hideLabel: true },
			{ name: 'vehicle_class', label: 'Vehicle Class' },
			{ name: 'length', label: 'Length' }
    ],
    links: ['pilot', 'films']
	}
};

export const CATEGORY_MAP = {
  'residents': 'people',
  'pilot': 'people',
  'films': 'films',
  'people': 'people',
  'locations': 'locations',
  'species': 'species',
  'vehicles': 'vehicles',
};

const FB_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php?u=';

export const generateFbShareURL = () => {
  return encodeURI(`${FB_SHARE_URL}${window.location.href}`);
}