const groups = ['group 2', 'group 3', 'group 4', 'group b', 'group s', 'group a'];
const group_2_cars = ['the esky v1', 'the meanie', 'la montaine', 'das 220', 'das 119i', 'le gorde', 'la regina'];
const locations = ['finland', 'sardinia', 'japan', 'norway', 'germany', 'kenya'];
const stages = ['1', '1-r', '2', '2-r', '3', '3-r', '4', '4-r', '5', '5-r', '6', '6-r'];
const weather_types = ['dry', 'wet'];
const user_countries = ['Portugal', 'Canada', 'Australia', 'Germany', 'Ukraine', 'United States', 'Antartica', 'Japan', 'Kenya'];

function getRandomIntInclusive(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomDate() {
	return new Date(+(new Date()) - Math.floor(Math.random() * 10_000_000_000));
}

function popRandom(list: any[]) {
	return list.splice(getRandomIntInclusive(1, list.length) - 1);
}

function chooseRandom(list: any[]) {
	return list[Math.floor(Math.random() * list.length)];
}

export type LeaderboardEntry = {
	score: number,
	rank: number,
	user_id: number,
	name: string,
	user_country: string,
	retrievalTime: Date,
	group: string,
	location: string,
	weather: 'wet' | 'dry'
	stage: string,
	car: string,
}

export function genLeaderboardEntries(numEntries: number) {
	const user_ids_set: Set<number> = new Set();
	while (user_ids_set.size < numEntries) {
		user_ids_set.add(getRandomIntInclusive(1, 10_000));
	}
	const user_ids: number[] = [...user_ids_set];
	let rank = getRandomIntInclusive(1, 1_000); // starting rank
	let entries = []
	for (let i = 0; i < numEntries; i++) {
		const user_id = user_ids.pop();
		const group = 'group 2';
		const location_ = chooseRandom(locations);
		const weather = chooseRandom(weather_types);
		const stage = chooseRandom(stages)
		const entry: LeaderboardEntry = {
			score: getRandomIntInclusive(60_000, 600_000),
			rank: rank++,
			user_id: user_id as number,
			name: `user_${user_id}`,
			user_country: chooseRandom(user_countries),
			retrievalTime: getRandomDate(),
			group: group,
			location: location_,
			weather: weather,
			stage: stage,
			car: chooseRandom(group_2_cars),
		}
		entries.push(entry);
	}
	return entries;
}
