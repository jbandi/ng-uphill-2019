export function handleServerError(error) {
  const errMsg = error.message || 'Error calling server';
  console.error(errMsg);
  alert('Error: Calling the server failed!');
  window.location.reload();
}
