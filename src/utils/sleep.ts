export default function sleep(duration: number = 1500): Promise<void> {
  console.log('🚀 ~ file: sleep.ts:2 ~ sleep ~ duration:', duration);
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
