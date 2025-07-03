import React from 'react';

export const parseMarkdownText = (text: string): React.ReactNode => {
  // Split text by markdown patterns
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  
  return parts.map((part, index) => {
    // Handle bold text **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-semibold text-gray-900 dark:text-white">
          {boldText}
        </strong>
      );
    }
    
    // Handle links [text](url)
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      const [, linkText, url] = linkMatch;
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
        >
          {linkText}
        </a>
      );
    }
    
    // Return regular text
    return part;
  });
};
