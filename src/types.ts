export type LeaderboardEntry = {
	score: number,
	rank: number,
	userId: number,
	name: string,
	userCountry: string,
	retrievalTime: Date,
	group: string,
	location: string,
	weather: 'wet' | 'dry'
	stage: string,
	car: string,
}

