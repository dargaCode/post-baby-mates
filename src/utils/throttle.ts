// initialize isCallbackDisabled variable outside throttle function
let isCallbackDisabled = false;

export default function throttle(callback: () => void, delayMs: number) {
  if (isCallbackDisabled) {
    return;
  }

  isCallbackDisabled = true;

  setTimeout(() => {
    callback();
    isCallbackDisabled = false;
  }, delayMs);
}
