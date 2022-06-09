export type LeaderboardEntry = {
	user_id: number,
	name: string,
	country: string,
	retrievalTime: Date,
	score: number,
}

const dataset_1: LeaderboardEntry[] = [
	{
		user_id: 1,
		name: 'user1',
		country: 'Canada',
		retrievalTime: new Date(),
		score: 120 * 1000
	},
	{
		user_id: 2,
		name: 'user2',
		country: 'Australia',
		retrievalTime: new Date(),
		score: 130 * 1000
	},
	{
		user_id: 3,
		name: 'user3',
		country: 'United States',
		retrievalTime: new Date(),
		score: 113 * 1000
	},
	{
		user_id: 7,
		name: 'user7',
		country: 'United States',
		retrievalTime: new Date(),
		score: 114.3 * 1000
	},
	{
		user_id: 4,
		name: 'user4',
		country: 'Germany',
		retrievalTime: new Date(),
		score: 300 * 1000
	},

];

export { dataset_1 };
