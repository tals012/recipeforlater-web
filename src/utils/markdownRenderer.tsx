import React from 'react';

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function renderMarkdown(text: string): React.ReactNode[] {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]?.trim() || '';

        // Skip empty lines
        if (!line) {
            continue;
        }

        // Handle # headers (h1)
        if (line.startsWith('# ') && !line.startsWith('## ')) {
            const headerText = line.substring(2);
            elements.push(
                <h1 key={key++} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
                    {renderInlineMarkdown(headerText)}
                </h1>
            );
            continue;
        }

        // Handle ## headers (h2)
        if (line.startsWith('## ')) {
            const headerText = line.substring(3);
            elements.push(
                <h2 key={key++} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
                    {renderInlineMarkdown(headerText)}
                </h2>
            );
            continue;
        }

        // Handle ### headers (h3)
        if (line.startsWith('### ')) {
            const headerText = line.substring(4);
            elements.push(
                <h3 key={key++} className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                    {renderInlineMarkdown(headerText)}
                </h3>
            );
            continue;
        }

        // Handle lists starting with -
        if (line.startsWith('- ')) {
            const listItems: string[] = [line.substring(2)];

            // Collect consecutive list items
            while (i + 1 < lines.length && lines[i + 1]?.trim().startsWith('- ')) {
                i++;
                const nextLine = lines[i];
                if (nextLine) {
                    listItems.push(nextLine.trim().substring(2));
                }
            }

            elements.push(
                <ul key={key++} className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    {listItems.map((item, index) => (
                        <li key={index}>{renderInlineMarkdown(item)}</li>
                    ))}
                </ul>
            );
            continue;
        }

        // Handle regular paragraphs
        elements.push(
            <p key={key++} className="text-gray-700 leading-relaxed mb-4">
                {renderInlineMarkdown(line)}
            </p>
        );
    }

    return elements;
}

function renderInlineMarkdown(text: string): React.ReactNode {
    // Handle **bold** text
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts = text.split(boldRegex);

    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (i % 2 === 0) {
            // Regular text
            if (part) {
                elements.push(part);
            }
        } else {
            // Bold text
            if (part) {
                elements.push(
                    <strong key={key++} className="font-semibold">
                        {part}
                    </strong>
                );
            }
        }
    }

    return elements.length === 1 ? elements[0] : elements;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
    content,
    className = "prose prose-lg max-w-none text-gray-700 space-y-6"
}) => {
    return (
        <div className={className}>
            {renderMarkdown(content)}
        </div>
    );
};

export default MarkdownRenderer; 