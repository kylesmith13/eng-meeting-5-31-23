const useTracking = () => {
  const track = (message: string) => {
    console.log(message);
    window.alert(message)
  }

  return { track }
}

export default useTracking;