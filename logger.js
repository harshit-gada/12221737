export const logger = (event, data) => {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${event}: ${JSON.stringify(data)}`;
  console.info(log);
};