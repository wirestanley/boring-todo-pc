
export async function getTask (){
   const response = await fetch('https://www.boredapi.com/api/activity')
  const json = await response.json()
  return json

}