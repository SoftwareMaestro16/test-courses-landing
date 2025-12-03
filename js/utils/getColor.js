export function getCategoryColor(type) {
    const colorMap = {
        'Marketing': '#03CEA4',
        'Management': '#5A87FC',
        'HR & Recruiting': '#F89828',
        'Design': '#F52F6E',
        'Development': '#7772F1'
    };
    return colorMap[type] || '#03CEA4'; 
}