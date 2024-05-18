/**
 * Format a given ISO date string to the Brazilian date format (dd/MM/yyyy HH:mm:ss).
 * @param isoDate - The ISO date string to format.
 * @returns The formatted date string in the Brazilian format.
 */
export function formatToBrazilianDate(isoDate: string): string {
	const date = new Date(isoDate);

	const options: Intl.DateTimeFormatOptions = {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	};

	return date.toLocaleString('pt-BR', options);
}
