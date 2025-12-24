export const getColorByName = (name: string): "error" | "warning" | "success" | "info" | "default" => {
    const lowerName = name?.toLowerCase() || '';
    
    // Priority colors
    if (lowerName.includes('high') || lowerName.includes('urgent')) return 'error';
    if (lowerName.includes('medium') || lowerName.includes('normal')) return 'warning';
    if (lowerName.includes('low')) return 'success';
    
    // Status colors
    if (lowerName.includes('open') || lowerName.includes('pending')) return 'error';
    if (lowerName.includes('progress') || lowerName.includes('working')) return 'info';
    if (lowerName.includes('closed') || lowerName.includes('resolved') || lowerName.includes('done')) return 'success';
    
    return 'default';
};