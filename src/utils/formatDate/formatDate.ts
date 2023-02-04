export function formatDateString(dateString: string) {
  const newDate = new Date(dateString);

  return newDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}
