import React from 'react';
import './ScrollableLeaderboard.css';
import { scoreToTimeString } from 'src/util';
import type { LeaderboardEntry } from 'src/types';

export default function ScrollableLeaderboard(props: any) {
	const leaderboardEntryCards = [];
	for (let entry of props.incoming_data) {
		leaderboardEntryCards.push(
				<div className="leaderboard-entry-card">
					<div className="rank-and-name section">{entry.rank}. {entry.name}</div>
					<div className="car section">{entry.car}</div>
					<div className="time-diff section">{scoreToTimeString(entry.score)}</div>
				</div>
		);
	}
			
	return (
		<div className="leaderboard-entry-wrapper">
				{leaderboardEntryCards}
		</div>
	);
}
