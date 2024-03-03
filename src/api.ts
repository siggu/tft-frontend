export async function getInformation() {
  const response = await fetch(`/Home`);
  const json = await response.json();
  return json;
}
