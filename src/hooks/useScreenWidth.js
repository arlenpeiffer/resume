import facepaint from "facepaint"

const useScreenWidth = () => {
  return facepaint([
    "@media(min-width: 320px)",
    "@media(min-width: 400px)",
    "@media(min-width: 600px)",
    "@media(min-width: 1366px)",
    "@media(min-width: 1600px)",
    "@media(min-width: 1920px)",
  ])
}

export default useScreenWidth
