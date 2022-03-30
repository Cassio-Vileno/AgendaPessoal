export function transformDateTimeUsToBr(dateTime: string): string {
  return( dateTime.split('-').reverse().join('/'));
}

export function trasformDateTime(dateTime: string): string {
  const [dateString, timeString] = dateTime.split(' ');
  return `${transformDateTimeUsToBr(dateString)} às ${timeString}`;
};