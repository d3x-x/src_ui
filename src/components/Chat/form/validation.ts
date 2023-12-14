const wordsRegexp = /({|}|<|>)/gi;

export function prepareValue(value: string) {
	return value.replace(wordsRegexp, (res) => (res ? '*'.repeat(res.length) : ''));
}
