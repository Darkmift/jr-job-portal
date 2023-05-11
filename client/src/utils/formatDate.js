const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
};

export default function formatDate(date, options = defaultOptions) {
    return date.toLocaleDateString('he-IL', options).replace(/\./g, '/');
}
