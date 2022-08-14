export default function(callback: () => void, delayMs: number) {
  let timeoutId: NodeJS.Timeout;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, delayMs);
  };
}
