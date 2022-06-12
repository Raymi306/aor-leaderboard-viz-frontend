export function scoreToTimeString(score: number) {
	let seconds = score / 1000
	const minutes = Math.floor(seconds / 60)
	seconds = Math.floor(seconds % 60);
	return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
