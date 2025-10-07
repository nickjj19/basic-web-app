export default function QueryProcessor(query: string): string {
  const q = query.trim().toLowerCase();

  // Preserve existing static answers
  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (q.includes("andrew id")) {
    return "My Andrew ID is: pjitjang";
  }

  if (q.includes("name")) {
    return "pjitjangg";
  }

  // Handle simple addition queries like "What is 15 plus 20?" or "15 + 20"
  const plusMatch = q.match(/(-?\d+)\s*(?:plus|\+)\s*(-?\d+)/);
  if (plusMatch) {
    const a = parseInt(plusMatch[1], 10);
    const b = parseInt(plusMatch[2], 10);
    return String(a + b);
  }

  // Handle 'largest' queries like
  // "Which of the following numbers is the largest: 91, 23, 17?"
  if (q.includes("largest") || q.includes("which of the following")) {
    const nums = Array.from(q.matchAll(/-?\d+/g)).map(m => parseInt(m[0], 10));
    if (nums.length > 0) {
      const max = Math.max(...nums);
      return String(max);
    }
  }

  // Fallback: empty string when we don't recognize the query
  return "";
}
